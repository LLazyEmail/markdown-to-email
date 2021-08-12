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
    const tree = create(<SubTitle><span>Some text</span></SubTitle>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props should contain children(span) elements', () => {
    const component = create(<SubTitle><span>Some text</span></SubTitle>);
    const { root } = component;
    expect(root.props.children.type).toBe('span');
  });

  test('<strong> has correct children elements', () => {
    const { getByTestId } = render(<SubTitle><span>Hello</span></SubTitle>);
    const strong = getByTestId('strongChildrenTest');

    expect(strong.children[0].textContent).toBe('Hello');
  });
});
