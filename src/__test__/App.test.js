import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../redux/ConfigureStore';
import App from '../App';

describe('Test if App matches snapshot', () => {
  test('matches', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
