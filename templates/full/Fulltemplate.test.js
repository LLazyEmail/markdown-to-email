import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import FullTemplate from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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

describe('Fulltemplate should contain these components', () => {
  it('Checking FullTemplate to contain HOC', () => {
    const wrapper = shallow(<FullTemplate />);
    expect(wrapper.find('HOC')).toHaveLength(1);
  });

  it('Checking FullTemplate to contain Hackernoon Logo', () => {
    const wrapper = shallow(<FullTemplate />);
    expect(wrapper.find('Logo')).toHaveLength(2);
  });

  it('Checking FullTemplate to contain BodyPrototype', () => {
    const wrapper = shallow(<FullTemplate />);
    expect(wrapper.find('BodyPrototype')).toHaveLength(1);
  });

  it('Checking FullTemplate to contain Footer', () => {
    const wrapper = shallow(<FullTemplate />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });
});