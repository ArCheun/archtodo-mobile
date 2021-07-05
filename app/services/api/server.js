const axios = require('axios');

const fetchTodos = async (ids) => {
  const todos = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
  );
  return todos.data;
};

const server = {
  fetchTodos: fetchTodos,
};

export default server;
