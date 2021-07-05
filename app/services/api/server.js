import http from '../../utils/http';

const fetchTodos = async (ids) => {
  const todos = await http.get('https://jsonplaceholder.typicode.com/todos');
  return todos.data;
};

const server = {
  fetchTodos: fetchTodos,
};

export default server;
