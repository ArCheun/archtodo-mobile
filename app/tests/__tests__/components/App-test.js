import 'react-native';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import App from '../../../App';
import auth from '@react-native-firebase/auth';

jest.mock('../../../utils/http');
jest.mock('../../../components/auth/buttons/GoogleLogin');

jest.mock('@react-native-firebase/auth', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    onAuthStateChanged: jest.fn((callback) => {
      return callback(
          {id: 170, name: 'John Doe', email: 'johndoe@archeun.com'});
    }),
    signOut: jest.fn(),
  })),
}));

test('Component will render without issues', async () => {
  const {getAllByText} = await waitFor(() => render(<App />));
  const todos = getAllByText(new RegExp(/Todo\s\d/, 'i'));
  const userEmail = getAllByText('Welcome johndoe@archeun.com');
  const logoutBtn = getAllByText('Logout');
  expect(todos).toHaveLength(5);
  expect(userEmail).toHaveLength(1);
  expect(logoutBtn).toHaveLength(1);
});

test('Todos will have correct texts upon rendering', async () => {
  const {getAllByText} = await waitFor(() => render(<App />));
  const todo3 = getAllByText('Todo 3');
  const userEmail = getAllByText('Welcome johndoe@archeun.com');

  expect(todo3).toHaveLength(1);
  expect(userEmail).toHaveLength(1);
});

test('Todos will not render if the user is not logged in', async () => {
  auth.mockImplementation(jest.fn(() => ({
    onAuthStateChanged: jest.fn((callback) => {
      return callback(false);
    }),
  })));

  auth.mockImplementation(jest.fn(() => ({
    onAuthStateChanged: jest.fn((callback) => {
      return callback(false);
    }),
  })));
  const {getAllByText} = await waitFor(() => render(<App />));
  const loginText = getAllByText('Login Using');
  const googleBtnTxt = getAllByText('Google Sign-In');
  expect(loginText).toHaveLength(1);
  expect(googleBtnTxt).toHaveLength(1);
});
