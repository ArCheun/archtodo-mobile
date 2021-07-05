import 'react-native';
import React from 'react';
import App from '../../../App';
import renderer, {act} from 'react-test-renderer';

jest.mock('../../../utils/http');
jest.useFakeTimers();

describe('App component', () => {

  it('renders without issues', () => {
    act(() => {
      renderer.create(<App />);
    });
  });

});

