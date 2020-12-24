import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Head from './head';

describe('head component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('html');
    ReactDOM.render(<Head />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Head />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
