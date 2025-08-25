// Middleware para tratamento de erros
const errorHandler = (err, req, res, next) => {
  console.error('Erro:', err);

  // Erro de validação
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Erro de validação',
      message: err.message
    });
  }

  // Erro de banco de dados
  if (err.code === '23505') { // Unique constraint violation
    return res.status(409).json({
      error: 'Conflito',
      message: 'Já existe um registro com esses dados'
    });
  }

  if (err.code === '23503') { // Foreign key constraint violation
    return res.status(400).json({
      error: 'Referência inválida',
      message: 'Referência não encontrada no banco de dados'
    });
  }

  // Erro de conexão com banco
  if (err.code === 'ECONNREFUSED') {
    return res.status(503).json({
      error: 'Serviço indisponível',
      message: 'Erro de conexão com o banco de dados'
    });
  }

  // Erro padrão
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Erro interno do servidor';

  res.status(statusCode).json({
    error: 'Erro interno',
    message: process.env.NODE_ENV === 'production' ? 'Erro interno do servidor' : message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = {
  errorHandler
};
