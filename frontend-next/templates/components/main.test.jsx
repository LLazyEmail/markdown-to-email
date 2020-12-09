import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Main from './main';

describe('main component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Main />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
