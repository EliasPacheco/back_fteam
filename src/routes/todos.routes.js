const express = require('express');
const TodoController = require('../controllers/todo.controller');
const { 
  validateCreateTodoData, 
  validateUpdateTodoData, 
  validateTodoId 
} = require('../middleware/validation.middleware');

const router = express.Router();

// Endpoints obrigatórios
// GET /todos - Listar todas as tarefas
router.get('/', TodoController.getAllTodos);

// GET /todos/:id - Buscar uma tarefa pelo ID
router.get('/:id', validateTodoId, TodoController.getTodoById);

// POST /todos - Criar uma nova tarefa
router.post('/', validateCreateTodoData, TodoController.createTodo);

// PUT /todos/:id - Atualizar uma tarefa existente
router.put('/:id', validateTodoId, validateUpdateTodoData, TodoController.updateTodo);

// DELETE /todos/:id - Excluir uma tarefa
router.delete('/:id', validateTodoId, TodoController.deleteTodo);



module.exports = router;
