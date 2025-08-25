const { pool } = require('../config/database');

class TodoModel {
  // Buscar todas as tarefas
  static async findAll() {
    try {
      const query = `
        SELECT * FROM todos 
        ORDER BY id ASC
      `;
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      throw new Error(`Erro ao buscar tarefas: ${error.message}`);
    }
  }

  // Buscar tarefa por ID
  static async findById(id) {
    try {
      const query = 'SELECT * FROM todos WHERE id = $1';
      const result = await pool.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Erro ao buscar tarefa: ${error.message}`);
    }
  }

  // Criar nova tarefa
  static async create(todoData) {
    try {
      const { titulo } = todoData;
      const query = `
        INSERT INTO todos (titulo)
        VALUES ($1)
        RETURNING *
      `;
      const values = [titulo];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Erro ao criar tarefa: ${error.message}`);
    }
  }

  // Atualizar tarefa
  static async update(id, todoData) {
    try {
      const { titulo } = todoData;
      const query = `
        UPDATE todos 
        SET titulo = $1
        WHERE id = $2
        RETURNING *
      `;
      const values = [titulo, id];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Erro ao atualizar tarefa: ${error.message}`);
    }
  }

  // Excluir tarefa
  static async delete(id) {
    try {
      const query = 'DELETE FROM todos WHERE id = $1 RETURNING *';
      const result = await pool.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Erro ao excluir tarefa: ${error.message}`);
    }
  }
}

module.exports = TodoModel;
