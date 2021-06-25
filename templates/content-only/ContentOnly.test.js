import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import ContentOnly from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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

describe('ContentOnly should contain these components', () => {
  it('Checking ContentOnly to contain HOC', () => {
    const wrapper = shallow(<ContentOnly />);
    expect(wrapper.find('HOC')).toHaveLength(1);
  });

  it('Checking ContentOnly to contain BodyPrototype', () => {
    const wrapper = shallow(<ContentOnly />);
    expect(wrapper.find('BodyPrototype')).toHaveLength(1);
  });

  it('Checking ContentOnly to contain Footer', () => {
    const wrapper = shallow(<ContentOnly />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });
});