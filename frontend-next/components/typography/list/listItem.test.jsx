import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ListItem from './item';

describe('ListItem component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<ListItem><h1>Some text</h1></ListItem>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props should contain children(h1) elements', () => {
    const component = create(<ListItem><h1>Some text</h1></ListItem>);
    const { root } = component;
    expect(root.props.children.type).toBe('h1');
  });

  test('<p> has correct children elements', () => {
    const { getByTestId } = render(<ListItem><h1>Hello</h1></ListItem>);
    const p = getByTestId('listItemTest');

    expect(p.children[0].textContent).toBe('Hello');
  });
});
