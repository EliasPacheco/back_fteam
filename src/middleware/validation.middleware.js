const { validateCreateTodo, validateUpdateTodo, validateId } = require('../dto/todo.dto');

// Middleware para validar dados de criação
const validateCreateTodoData = (req, res, next) => {
  const { error, value } = validateCreateTodo(req.body);
  
  if (error) {
    const errors = error.details.map(detail => ({
      field: detail.path.join('.'),
      message: detail.message
    }));
    
    return res.status(400).json({
      error: 'Dados inválidos',
      details: errors
    });
  }
  
  // Adiciona os dados validados ao request
  req.validatedData = value;
  next();
};

// Middleware para validar dados de atualização
const validateUpdateTodoData = (req, res, next) => {
  const { error, value } = validateUpdateTodo(req.body);
  
  if (error) {
    const errors = error.details.map(detail => ({
      field: detail.path.join('.'),
      message: detail.message
    }));
    
    return res.status(400).json({
      error: 'Dados inválidos',
      details: errors
    });
  }
  
  // Adiciona os dados validados ao request
  req.validatedData = value;
  next();
};

// Middleware para validar ID
const validateTodoId = (req, res, next) => {
  const { error } = validateId(req.params.id);
  
  if (error) {
    return res.status(400).json({
      error: 'ID inválido',
      message: error.details[0].message
    });
  }
  
  next();
};

module.exports = {
  validateCreateTodoData,
  validateUpdateTodoData,
  validateTodoId
};
