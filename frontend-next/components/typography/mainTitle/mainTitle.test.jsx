import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import MainTitle from './index';

describe('mainTitle/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainTitle />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<MainTitle><h1>Some text</h1></MainTitle>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props should contain children(h1) elements', () => {
    const component = create(<MainTitle><h1>Some text</h1></MainTitle>);
    const { root } = component;
    expect(root.props.children.type).toBe('h1');
  });

  test('<span> has correct children elements', () => {
    const { getByTestId } = render(<MainTitle><h1>Hello</h1></MainTitle>);
    const span = getByTestId('mainTitleChildrenTest');

    expect(span.children[0].textContent).toBe('Hello');
  });
});
