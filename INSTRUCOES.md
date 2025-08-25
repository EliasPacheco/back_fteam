# 🚀 Instruções Rápidas - FTeam Backend

## ⚡ Setup Rápido

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar banco de dados
- Certifique-se de que o PostgreSQL está rodando
- Crie um banco de dados chamado "fteam"
- Copie o arquivo de configuração:
```bash
cp env.example .env
```

### 3. Iniciar o servidor
```bash
npm run dev
```

O servidor estará disponível em: `http://localhost:3000`

## 📋 Endpoints Principais

### Listar todas as tarefas
```bash
GET http://localhost:3000/todos
```

### Criar nova tarefa
```bash
POST http://localhost:3000/todos
Content-Type: application/json

{
  "titulo": "Minha tarefa"
}
```

### Buscar tarefa por ID
```bash
GET http://localhost:3000/todos/{id}
```

### Atualizar tarefa
```bash
PUT http://localhost:3000/todos/{id}
Content-Type: application/json

{
  "titulo": "Título atualizado"
}
```

### Excluir tarefa
```bash
DELETE http://localhost:3000/todos/{id}
```

## 🧪 Testar a API

Após iniciar o servidor, execute:
```bash
npm run test:api
```

## 📊 Health Check

Verificar se a API está funcionando:
```bash
GET http://localhost:3000/health
```

## 🔧 Configurações do Banco

- **Host**: localhost
- **Porta**: 5432
- **Banco**: fteam
- **Usuário**: postgres
- **Senha**: root

## 📝 Estrutura do Projeto

```
src/
├── config/          # Configurações (banco de dados)
├── controllers/     # Controladores HTTP
├── dto/            # Validações e DTOs
├── middleware/     # Middlewares (validação, erro)
├── models/         # Modelos de dados
├── routes/         # Definição de rotas
├── services/       # Lógica de negócio
└── server.js       # Arquivo principal
```

## 🚨 Solução de Problemas

### Erro de conexão com banco
- Verifique se o PostgreSQL está rodando
- Confirme as credenciais no arquivo `.env`
- Certifique-se de que o banco "fteam" existe

### Erro de dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta em uso
Altere a porta no arquivo `.env`:
```
PORT=3001
```
