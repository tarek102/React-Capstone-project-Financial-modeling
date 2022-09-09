import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('test if Header matches snapshot', () => {
  it('Check if Header renders correctly', () => {
    const tree = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
