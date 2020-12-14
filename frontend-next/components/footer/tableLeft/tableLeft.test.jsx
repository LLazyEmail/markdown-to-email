import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import TableLeft from './tableLeft';

afterEach(() => {
  cleanup();
});

describe('tableLeft/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TableLeft />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<TableLeft />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props elements should contain correct data', () => {
    const component = create(<TableLeft href="https://www.youtube.com" src="../img/any.jpeg" alt="PHOTO" />);
    const { root } = component;

    expect(root.props.href).toBe('https://www.youtube.com');
    expect(root.props.src).toBe('../img/any.jpeg');
    expect(root.props.alt).toBe('PHOTO');
  });

  test('<img> has correct alt and src', () => {
    const { getByTestId } = render(<TableLeft href="https://www.youtube.com" src="../img/any.jpeg" alt="PHOTO" />);
    const img = getByTestId('tableLeftImgTest');

    expect(img.src).toBe('http://localhost/img/any.jpeg');
    expect(img.alt).toBe('PHOTO');
  });

  test('<a> has correct alt and src', () => {
    const { getByTestId } = render(<TableLeft href="https://www.youtube.com" src="../img/any.jpeg" alt="PHOTO" />);
    const a = getByTestId('tableLeftHrefTest');

    expect(a.href).toBe('https://www.youtube.com/');
  });
});
