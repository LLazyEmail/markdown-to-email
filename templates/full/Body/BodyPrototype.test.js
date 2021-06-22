import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import BodyPrototype from './index';
import config from '../config';
describe('BodyPrototype component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BodyPrototype config={config} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const wrapper = create(<BodyPrototype config={config} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});