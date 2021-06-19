import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import FullTemplate from './index';

describe('FullTemplate component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FullTemplate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const wrapper = create(<FullTemplate />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});