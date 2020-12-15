import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import PreviewText from './index';

afterEach(() => {
  cleanup();
});

describe('previewText/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PreviewText />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<PreviewText><h1>Some text</h1></PreviewText>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props contains anything', () => {
    const component = create(<PreviewText><h1>Hello</h1></PreviewText>);
    const { root } = component;

    expect(root.props.children).not.toBeNull();
  });

  test('span contains correct children elements', () => {
    const component = create(<PreviewText><h1>Hello</h1></PreviewText>);
    const { root } = component;

    const span = root.findByType('span');

    expect(span.children[0].type).toBe('h1');
  });

  test('compoents children element should contain correct element', () => {
    const component = create(<PreviewText><h1>Hello</h1></PreviewText>);
    const { root } = component;

    expect(root.props.children.type).toBe('h1');
  });
});
