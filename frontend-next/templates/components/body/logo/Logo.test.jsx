import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import LogoTop from './index';

afterEach(() => {
  cleanup();
});

describe('logoTop/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogoTop />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<LogoTop><h1>Some text</h1></LogoTop>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly', () => {
    const tree = create(<LogoTop />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
