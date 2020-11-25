import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Link from './index';

describe('link/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Link />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Link><h1>Some text</h1></Link>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props should contain children(h1) elements', () => {
    const component = create(<Link><h1>Some text</h1></Link>);
    const { root } = component;
    expect(root.props.children.type).toBe('h1');
  });

  test('<a> has correct src and alt', () => {
    const { getByTestId } = render(<Link href="https://vk.com/feed" />);
    const a = getByTestId('linkPropsTest');

    expect(a.href).toBe('https://vk.com/feed');
  });

  test('<a> has correct children elements', () => {
    const { getByTestId } = render(<Link href="https://vk.com/feed"><h1>Hello</h1></Link>);
    const a = getByTestId('linkPropsTest');

    expect(a.children[0].textContent).toBe('Hello');
  });
});
