import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import ContentOnly from './index';

describe('ContentOnly component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContentOnly />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const wrapper = create(<ContentOnly />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});