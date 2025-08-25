const axios = require('axios');

const BASE_URL = 'http://localhost:3000/todos';

// Função para testar a API
async function testAPI() {
  console.log('🧪 Iniciando testes da API...\n');

  try {
    // Teste 1: Listar todas as tarefas (deve estar vazio inicialmente)
    console.log('1️⃣ Testando GET /todos (listar todas)');
    const listResponse = await axios.get(BASE_URL);
    console.log('✅ Lista de tarefas:', listResponse.data);
    console.log('');

    // Teste 2: Criar uma nova tarefa
    console.log('2️⃣ Testando POST /todos (criar tarefa)');
    const newTodo = {
      titulo: 'Implementar API REST'
    };
    
    const createResponse = await axios.post(BASE_URL, newTodo);
    console.log('✅ Tarefa criada:', createResponse.data);
    const todoId = createResponse.data.data.id;
    console.log('');

    // Teste 3: Buscar tarefa por ID
    console.log('3️⃣ Testando GET /todos/:id (buscar por ID)');
    const getByIdResponse = await axios.get(`${BASE_URL}/${todoId}`);
    console.log('✅ Tarefa encontrada:', getByIdResponse.data);
    console.log('');

    // Teste 4: Criar mais algumas tarefas
    console.log('4️⃣ Testando criação de mais tarefas');
    const todos = [
      {
        titulo: 'Configurar banco de dados'
      },
      {
        titulo: 'Implementar validações'
      }
    ];

    for (const todo of todos) {
      const response = await axios.post(BASE_URL, todo);
      console.log(`✅ Tarefa criada: ${response.data.data.titulo}`);
    }
    console.log('');

    // Teste 5: Listar todas as tarefas novamente
    console.log('5️⃣ Testando GET /todos (listar todas após criação)');
    const listAllResponse = await axios.get(BASE_URL);
    console.log('✅ Total de tarefas:', listAllResponse.data.count);
    console.log('');

    // Teste 6: Atualizar uma tarefa
    console.log('6️⃣ Testando PUT /todos/:id (atualizar tarefa)');
    const updateData = {
      titulo: 'Implementar API REST - ATUALIZADO'
    };
    const updateResponse = await axios.put(`${BASE_URL}/${todoId}`, updateData);
    console.log('✅ Tarefa atualizada:', updateResponse.data);
    console.log('');

    // Teste 7: Testar validação de dados inválidos
    console.log('7️⃣ Testando validação de dados inválidos');
    try {
      await axios.post(BASE_URL, {
        titulo: '' // Título vazio deve gerar erro
      });
    } catch (error) {
      console.log('✅ Validação funcionando:', error.response.data);
    }
    console.log('');

    // Teste 8: Excluir uma tarefa
    console.log('8️⃣ Testando DELETE /todos/:id (excluir tarefa)');
    const deleteResponse = await axios.delete(`${BASE_URL}/${todoId}`);
    console.log('✅ Tarefa excluída:', deleteResponse.data);
    console.log('');

    // Teste 9: Verificar se a tarefa foi realmente excluída
    console.log('9️⃣ Testando busca de tarefa excluída');
    try {
      await axios.get(`${BASE_URL}/${todoId}`);
    } catch (error) {
      console.log('✅ Tarefa não encontrada (como esperado):', error.response.data);
    }
    console.log('');

    console.log('🎉 Todos os testes foram executados com sucesso!');

  } catch (error) {
    console.error('❌ Erro durante os testes:', error.response?.data || error.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (require.main === module) {
  testAPI();
}

module.exports = { testAPI };
