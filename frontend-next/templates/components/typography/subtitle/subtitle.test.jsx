import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import SubTitle from './index';

describe('subtitle/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SubTitle />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<SubTitle><h1>Some text</h1></SubTitle>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props should contain children(h1) elements', () => {
    const component = create(<SubTitle><h1>Some text</h1></SubTitle>);
    const { root } = component;
    expect(root.props.children.type).toBe('h1');
  });

  test('<strong> has correct children elements', () => {
    const { getByTestId } = render(<SubTitle><h1>Hello</h1></SubTitle>);
    const strong = getByTestId('subtitleChildrenTest');

    expect(strong.children[0].textContent).toBe('Hello');
  });
});
