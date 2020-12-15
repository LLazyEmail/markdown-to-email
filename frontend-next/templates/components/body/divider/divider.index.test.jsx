import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { cleanup, render } from '@testing-library/react';
import Divider from './index';

afterEach(() => {
  cleanup();
});

describe('divider/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Divider />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Divider><h1>Some text</h1></Divider>);
    expect(tree).toMatchSnapshot(); // .toJSON()
  });

  test('compoents props should contain children(h1) elements', () => {
    const component = create(<Divider><h1>Some text</h1></Divider>);
    const { root } = component;

    expect(root.props.children.type).toBe('h1');
  });

  test('<td> has correct children elements', () => {
    const { getByTestId } = render(<Divider><h1>Hello</h1></Divider>);
    const td = getByTestId('dividerChildrenTest');

    expect(td.children[0].textContent).toBe('Hello');
  });
});
