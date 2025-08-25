const Joi = require('joi');

// Schema para criação de tarefa
const createTodoSchema = Joi.object({
  titulo: Joi.string()
    .min(1)
    .max(255)
    .required()
    .messages({
      'string.empty': 'O título é obrigatório',
      'string.min': 'O título deve ter pelo menos 1 caractere',
      'string.max': 'O título deve ter no máximo 255 caracteres',
      'any.required': 'O título é obrigatório'
    })
});

// Schema para atualização de tarefa
const updateTodoSchema = Joi.object({
  titulo: Joi.string()
    .min(1)
    .max(255)
    .required()
    .messages({
      'string.empty': 'O título não pode estar vazio',
      'string.min': 'O título deve ter pelo menos 1 caractere',
      'string.max': 'O título deve ter no máximo 255 caracteres',
      'any.required': 'O título é obrigatório'
    })
});

// Schema para validação de ID
const idSchema = Joi.object({
  id: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      'number.base': 'O ID deve ser um número',
      'number.integer': 'O ID deve ser um número inteiro',
      'number.positive': 'O ID deve ser um número positivo',
      'any.required': 'O ID é obrigatório'
    })
});

// Função para validar dados de criação
const validateCreateTodo = (data) => {
  return createTodoSchema.validate(data, { abortEarly: false });
};

// Função para validar dados de atualização
const validateUpdateTodo = (data) => {
  return updateTodoSchema.validate(data, { abortEarly: false });
};

// Função para validar ID
const validateId = (id) => {
  return idSchema.validate({ id });
};

module.exports = {
  validateCreateTodo,
  validateUpdateTodo,
  validateId,
  createTodoSchema,
  updateTodoSchema,
  idSchema
};
