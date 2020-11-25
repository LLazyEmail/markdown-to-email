import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Divider from './index';

describe('divider/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Divider />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Divider><h1>Some text</h1></Divider>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props should contain children(h1) elements', () => {
    const component = create(<Divider><h1>Some text</h1></Divider>);
    const { root } = component;
    expect(root.props.children.type).toBe('h1');
  });
});
