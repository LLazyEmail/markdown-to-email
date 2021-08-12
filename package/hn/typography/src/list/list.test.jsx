import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import List from './index';

describe('List component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<List><h1>Some text</h1></List>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props should contain children(h1) elements', () => {
    const component = create(<List><h1>Some text</h1></List>);
    const { root } = component;
    expect(root.props.children.type).toBe('h1');
  });

  test('<ul> has correct children elements', () => {
    const { getByTestId } = render(<List><h1>Hello</h1></List>);
    const ul = getByTestId('listProsChildrenTest');

    expect(ul.children[0].textContent).toBe('Hello');
  });
});
