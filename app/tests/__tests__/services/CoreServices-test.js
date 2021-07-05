import 'react-native';
import React from 'react';
import server from '../../../services/api/server';
jest.mock('../../../utils/http');

import http from '../../../utils/__mocks__/http';

describe('server', () => {
  jest.useFakeTimers();
  it('fetchTodos will return the list of todos', async () => {
    const todos = await server.fetchTodos();
    expect(todos).toStrictEqual(http.todos);
  });
});

