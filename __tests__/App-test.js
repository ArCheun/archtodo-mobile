import 'react-native';
import React from 'react';
import App from '../app/App';

jest.mock('../app/utils/http');

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

it('renders correctly', () => {
  jest.useFakeTimers();
  act(() => {
    renderer.create(<App />);
  });
});
