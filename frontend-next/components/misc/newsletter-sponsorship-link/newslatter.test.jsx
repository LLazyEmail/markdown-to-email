import ReactDOM from 'react-dom';
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import NewsletterSponsorshipLink from './index';

afterEach(() => {
  cleanup();
});

describe('newslatter/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewsletterSponsorshipLink />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<NewsletterSponsorshipLink />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('<a> has correct href', () => {
    const { getByTestId } = render(<NewsletterSponsorshipLink />);
    const a = getByTestId('newslatterHrefTest');

    expect(a.href).toBe('https://sponsor.hackernoon.com/contact');
  });
});
