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
    const tree = create(<ListItem><span>Some text</span></ListItem>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props should contain children(h1) elements', () => {
    const component = create(<ListItem><span>Some text</span></ListItem>);
    const { root } = component;
    expect(root.props.children.type).toBe('span');
  });

  test('<p> has correct children elements', () => {
    const { getByTestId } = render(<ListItem><span>Hello</span></ListItem>);
    const p = getByTestId('listItemTest');

    expect(p.children[0].textContent).toBe('Hello');
  });
});
