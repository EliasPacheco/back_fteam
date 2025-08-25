const TodoModel = require('../models/todo.model');

class TodoService {
  // Buscar todas as tarefas
  static async getAllTodos() {
    try {
      const todos = await TodoModel.findAll();
      return {
        success: true,
        data: todos,
        count: todos.length
      };
    } catch (error) {
      throw new Error(`Erro no serviço: ${error.message}`);
    }
  }

  // Buscar tarefa por ID
  static async getTodoById(id) {
    try {
      const todo = await TodoModel.findById(id);
      
      if (!todo) {
        const error = new Error('Tarefa não encontrada');
        error.statusCode = 404;
        throw error;
      }

      return {
        success: true,
        data: todo
      };
    } catch (error) {
      throw new Error(`Erro no serviço: ${error.message}`);
    }
  }

  // Criar nova tarefa
  static async createTodo(todoData) {
    try {
      // Validações adicionais de negócio
      if (!todoData.titulo || todoData.titulo.trim().length === 0) {
        const error = new Error('Título é obrigatório');
        error.statusCode = 400;
        throw error;
      }

      const newTodo = await TodoModel.create(todoData);
      
      return {
        success: true,
        data: newTodo,
        message: 'Tarefa criada com sucesso'
      };
    } catch (error) {
      throw new Error(`Erro no serviço: ${error.message}`);
    }
  }

  // Atualizar tarefa
  static async updateTodo(id, todoData) {
    try {
      // Verifica se a tarefa existe
      const existingTodo = await TodoModel.findById(id);
      if (!existingTodo) {
        const error = new Error('Tarefa não encontrada');
        error.statusCode = 404;
        throw error;
      }

      // Validações de negócio para atualização
      if (todoData.titulo !== undefined && todoData.titulo.trim().length === 0) {
        const error = new Error('Título não pode estar vazio');
        error.statusCode = 400;
        throw error;
      }

      const updatedTodo = await TodoModel.update(id, todoData);
      
      return {
        success: true,
        data: updatedTodo,
        message: 'Tarefa atualizada com sucesso'
      };
    } catch (error) {
      throw new Error(`Erro no serviço: ${error.message}`);
    }
  }

  // Excluir tarefa
  static async deleteTodo(id) {
    try {
      // Verifica se a tarefa existe
      const existingTodo = await TodoModel.findById(id);
      if (!existingTodo) {
        const error = new Error('Tarefa não encontrada');
        error.statusCode = 404;
        throw error;
      }

      const deletedTodo = await TodoModel.delete(id);
      
      return {
        success: true,
        data: deletedTodo,
        message: 'Tarefa excluída com sucesso'
      };
    } catch (error) {
      throw new Error(`Erro no serviço: ${error.message}`);
    }
  }


}

module.exports = TodoService;
