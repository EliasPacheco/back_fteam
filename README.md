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
