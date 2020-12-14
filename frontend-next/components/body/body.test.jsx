import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Body from '.';

describe('body component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Body />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Body><h1>Some text</h1></Body>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props should contain children(h1) elements', () => {
    const component = create(<Body><h1>Some text</h1></Body>);
    const { root } = component;
    expect(root.props.children.type).toBe('h1');
  });

  test('<td> has correct children elements', () => {
    const { getByTestId } = render(<Body header="Some Text"><h1>Hello</h1></Body>);
    const td = getByTestId('bodyPropsTest');

    expect(td.textContent).toBe('Some Text');
  });
});
