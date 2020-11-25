import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Image from './index';

describe('image/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Image><h1>Some text</h1></Image>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props should contain children(h1) elements', () => {
    const component = create(<Image><h1>Some text</h1></Image>);
    const { root } = component;
    expect(root.props.children.type).toBe('h1');
  });

  test('<img> has correct src and alt', () => {
    const { getByTestId } = render(<Image src="main/img.png" alt="PHOTO" />);
    const img = getByTestId('imagePropsTest');

    expect(img.src).toBe('http://localhost/main/img.png');
    expect(img.alt).toBe('PHOTO');
  });
});
