import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { cleanup, render } from '@testing-library/react';

import Sponsor from './index';

afterEach(() => {
  cleanup();
});

describe('sponsor/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sponsor />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Sponsor />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props contains anything', () => {
    const component = create(<Sponsor><h1>Hello</h1></Sponsor>);
    const { root } = component;

    expect(root.props.children).not.toBeNull();
  });

  test('strong contains correct children elements', () => {
    const { getByTestId } = render(<Sponsor><h1>Hello</h1></Sponsor>);
    const strong = getByTestId('sponsorChildrenTest');

    expect(strong.children[0].textContent).toBe('Hello');
  });

  test('compoents children element should contain correct element', () => {
    const component = create(<Sponsor><h1>Hello</h1></Sponsor>);
    const { root } = component;

    expect(root.props.children.type).toBe('h1');
  });

  test('compoents props elements should contain correct data', () => {
    const component = create(<Sponsor leftHref="https://www.youtube.com" leftSrc="../main/img.png" rightHref="https://vk.com/" />);
    const { root } = component;

    expect(root.props.leftHref).toBe('https://www.youtube.com');
    expect(root.props.rightHref).toBe('https://vk.com/');
    expect(root.props.leftSrc).toBe('../main/img.png');
  });

  test('<a> has correct href', () => {
    const { getByTestId } = render(<Sponsor leftHref="https://www.youtube.com/" leftSrc="../main/img.png" rightHref="https://vk.com/" />);
    const a = getByTestId('sponsorHrefTest');

    expect(a.href).toBe('https://www.youtube.com/');
  });

  test('<img> has correct src', () => {
    const { getByTestId } = render(<Sponsor leftHref="https://www.youtube.com" leftSrc="main/img.png" rightHref="https://vk.com/" />);
    const img = getByTestId('sponsorSrcTest');

    expect(img.src).toBe('http://localhost/main/img.png');
  });
});
