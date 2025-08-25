const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'fteam',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'root',
  max: 20, // máximo de conexões no pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Teste de conexão
pool.on('connect', () => {
  console.log('✅ Conectado ao banco de dados PostgreSQL');
});

pool.on('error', (err) => {
  console.error('❌ Erro na conexão com o banco:', err);
});

// Função para inicializar o banco
const initializeDatabase = async () => {
  try {
    const client = await pool.connect();
    
    // Criar tabela todos se não existir (estrutura simples)
    await client.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL
      );
    `);

    client.release();
    console.log('✅ Tabela todos criada/verificada com sucesso');
  } catch (error) {
    console.error('❌ Erro ao inicializar banco:', error);
    throw error;
  }
};

module.exports = {
  pool,
  initializeDatabase
};
