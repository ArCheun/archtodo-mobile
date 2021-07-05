const todos = {
  1: {id: 1, title: 'Todo 1'},
  2: {id: 2, title: 'Todo 2'},
  3: {id: 3, title: 'Todo 3'},
  4: {id: 4, title: 'Todo 4'},
  5: {id: 5, title: 'Todo 5'},
};

const getScenariosForGet = (url, options) => {
  if (url === 'https://jsonplaceholder.typicode.com/todos') {
    return {'data': todos};
  }
};

const get = async (url, options = {}) => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      return resolve(getScenariosForGet(url, options));
    });
  });
};

const http = {
  todos: todos,
  get: get,
};

export default http;

