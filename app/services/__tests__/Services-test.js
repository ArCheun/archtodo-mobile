import 'react-native';
import React from 'react';
import server from '../api/server';
import http from '../../utils/__mocks__/http';


jest.mock('../../utils/http');

describe('server', () => {
  jest.useFakeTimers();
  it('fetchTodos will return the list of todos', async () => {
    const todos = await server.fetchTodos();
    expect(todos).toStrictEqual(http.todos);
  });
});

