const TodoService = require('../services/todo.service');

class TodoController {
  // GET /todos - Listar todas as tarefas
  static async getAllTodos(req, res, next) {
    try {
      const result = await TodoService.getAllTodos();
      
      res.status(200).json({
        success: true,
        message: 'Tarefas listadas com sucesso',
        data: result.data,
        count: result.count,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      next(error);
    }
  }

  // GET /todos/:id - Buscar uma tarefa pelo ID
  static async getTodoById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await TodoService.getTodoById(id);
      
      res.status(200).json({
        success: true,
        message: 'Tarefa encontrada com sucesso',
        data: result.data,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      next(error);
    }
  }

  // POST /todos - Criar uma nova tarefa
  static async createTodo(req, res, next) {
    try {
      const todoData = req.validatedData;
      const result = await TodoService.createTodo(todoData);
      
      res.status(201).json({
        success: true,
        message: result.message,
        data: result.data,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      next(error);
    }
  }

  // PUT /todos/:id - Atualizar uma tarefa existente
  static async updateTodo(req, res, next) {
    try {
      const { id } = req.params;
      const todoData = req.validatedData;
      const result = await TodoService.updateTodo(id, todoData);
      
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE /todos/:id - Excluir uma tarefa
  static async deleteTodo(req, res, next) {
    try {
      const { id } = req.params;
      const result = await TodoService.deleteTodo(id);
      
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      next(error);
    }
  }


}

module.exports = TodoController;
