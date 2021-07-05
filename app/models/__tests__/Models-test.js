import 'react-native';
import React from 'react';
import store from '../store';
import {fetchTodos, selectAllTodos} from '../todos/todosSlice';
import http from '../../utils/__mocks__/http';

const mockTodos = http.todos;
jest.mock('../../utils/http');

describe('store', () => {

  it('initial setup is correct', () => {
    expect(store.getState()).toStrictEqual({
      'todos': {'entities': {}, 'ids': []},
    });
  });
});

describe('in todosSlice', () => {

  describe('after calling fetchTodos', () => {

    it('the state is properly updated', () => {
      return store.dispatch(fetchTodos()).then(() => {
        expect(store.getState()).toEqual({
          'todos': {
            'entities': mockTodos,
            'ids': Object.keys(mockTodos).map(id => parseInt(id, 10)),
          },
        });
      });
    });

    it('the selectAllTodos will return all the todos', () => {
      return store.dispatch(fetchTodos()).then(() => {
        const allTodos = selectAllTodos(store.getState());
        expect(allTodos).toEqual(Object.values(mockTodos));
      });
    });
  });

});
