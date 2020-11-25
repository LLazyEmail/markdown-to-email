import ReactDOM from 'react-dom';
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import Unsubscribe from './index';

afterEach(() => {
  cleanup();
});

describe('unsubscribe/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Unsubscribe />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Unsubscribe />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('<a> has correct href', () => {
    const { getByTestId } = render(<Unsubscribe hrefUnsub="https://www.youtube.com/" />);
    const a = getByTestId('unsubscribeTest');

    expect(a.href).toBe('https://www.youtube.com/');
  });
});
