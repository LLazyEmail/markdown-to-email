import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import Content from './index';

afterEach(() => {
  cleanup();
});

describe('content/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Content />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("compoents children element should contain 'content'", () => {
    const component = create(<Content />);
    const { root } = component;

    expect(root.children[0]).toBe('content');
  });
});
