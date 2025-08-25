# FTeam Backend - API de Gerenciamento de Tarefas

Backend Node.js completo para gerenciamento de tarefas com PostgreSQL, seguindo arquitetura modular e boas práticas.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **PostgreSQL** - Banco de dados
- **Joi** - Validação de dados
- **Helmet** - Segurança
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - Proteção contra spam

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL instalado e rodando
- npm ou yarn

## 🛠️ Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd back_fteam
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Copie o arquivo de exemplo
cp env.example .env

# Edite o arquivo .env com suas configurações
DB_HOST=localhost
DB_PORT=5432
DB_NAME=fteam
DB_USER=postgres
DB_PASSWORD=root
PORT=3000
```

4. **Configure o banco de dados**
- Certifique-se de que o PostgreSQL está rodando
- Crie um banco de dados chamado "fteam"
- As tabelas serão criadas automaticamente na primeira execução

5. **Execute o projeto**
```bash
# Desenvolvimento (com nodemon)
npm run dev

# Produção
npm start
```

## 📚 Endpoints da API

### Endpoints Obrigatórios

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/todos` | Listar todas as tarefas |
| GET | `/todos/:id` | Buscar uma tarefa pelo ID |
| POST | `/todos` | Criar uma nova tarefa |
| PUT | `/todos/:id` | Atualizar uma tarefa existente |
| DELETE | `/todos/:id` | Excluir uma tarefa |

### Endpoints Extras

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/health` | Health check da API |

## 📝 Exemplos de Uso

### Criar uma nova tarefa
```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Implementar API"
  }'
```

### Listar todas as tarefas
```bash
curl -X GET http://localhost:3000/todos
```

### Buscar tarefa por ID
```bash
curl -X GET http://localhost:3000/todos/{id}
```

### Atualizar uma tarefa
```bash
curl -X PUT http://localhost:3000/todos/{id} \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Título atualizado"
  }'
```

### Excluir uma tarefa
```bash
curl -X DELETE http://localhost:3000/todos/{id}
```

## 🏗️ Estrutura do Projeto

```
src/
├── config/
│   └── database.js          # Configuração do PostgreSQL
├── controllers/
│   └── todo.controller.js   # Controladores das requisições
├── dto/
│   └── todo.dto.js          # DTOs e validações
├── middleware/
│   ├── error.middleware.js  # Tratamento de erros
│   └── validation.middleware.js # Validação de dados
├── models/
│   └── todo.model.js        # Modelo de dados
├── routes/
│   └── todos.routes.js      # Definição das rotas
├── services/
│   └── todo.service.js      # Lógica de negócio
└── server.js                # Arquivo principal
```

## 🔧 Validações

O projeto utiliza Joi para validação de dados:

- **Título**: Obrigatório, 1-255 caracteres
- **ID**: Número inteiro positivo

## 🛡️ Segurança

- **Helmet**: Headers de segurança
- **Rate Limiting**: Proteção contra spam (100 requests/15min)
- **CORS**: Configurado para permitir requisições cross-origin
- **Validação**: Todos os dados de entrada são validados

## 🧪 Testes

```bash
# Executar testes
npm test
```

## 📊 Respostas da API

Todas as respostas seguem o padrão:

```json
{
  "success": true,
  "message": "Mensagem descritiva",
  "data": { ... },
  "count": 1,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🚨 Tratamento de Erros

Erros são retornados no formato:

```json
{
  "error": "Tipo do erro",
  "message": "Descrição do erro",
  "details": [ ... ] // Para erros de validação
}
```

## 📈 Status Codes

- `200` - Sucesso
- `201` - Criado com sucesso
- `400` - Dados inválidos
- `404` - Recurso não encontrado
- `409` - Conflito
- `500` - Erro interno do servidor

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
