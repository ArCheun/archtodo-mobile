import React from 'react';
import {Provider} from 'react-redux';
import store from './models/store';
import TodoList from './components/TodoList';

const App = () => {

  return (
      <Provider store={store}>
        <TodoList />
      </Provider>
  );
};

export default App;
