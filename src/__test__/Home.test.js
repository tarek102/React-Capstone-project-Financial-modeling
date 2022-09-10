import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import store from '../redux/ConfigureStore';

describe('Test if Home matches snapshot', () => {
  it('matches', () => {
    const tree = render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
