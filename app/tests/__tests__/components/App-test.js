import 'react-native';
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import App from '../../../App';

jest.mock('../../../utils/http');

test('Component will render without issues', async () => {
  const {getAllByText} = await waitFor(() => render(<App />));
  const todos = getAllByText(new RegExp(/Todo\s\d/, 'i'));
  expect(todos).toHaveLength(5);
});

test('Todos will have correct texts upon rendering', async () => {
  const {getAllByText} = await waitFor(() => render(<App />));
  const todo3 = getAllByText('Todo 3');
  expect(todo3).toHaveLength(1);
});
