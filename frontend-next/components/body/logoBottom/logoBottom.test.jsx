import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import LogoBottom from './index';

afterEach(() => {
  cleanup();
});

describe('logoBottom/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogoBottom />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<LogoBottom />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
