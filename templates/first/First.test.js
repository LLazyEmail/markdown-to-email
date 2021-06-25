import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import First from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('First/First component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<First />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const wrapper = create(<First />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('First should contain these components', () => {
  it('Checking First to contain HOC', () => {
    const wrapper = shallow(<First />);
    expect(wrapper.find('HOC')).toHaveLength(1);
  });

  it('Checking First to contain Hackernoon Logo', () => {
    const wrapper = shallow(<First />);
    expect(wrapper.find('Logo')).toHaveLength(2);
  });

  it('Checking First to contain BodyPrototype', () => {
    const wrapper = shallow(<First />);
    expect(wrapper.find('BodyPrototype')).toHaveLength(1);
  });

  it('Checking First to contain Footer', () => {
    const wrapper = shallow(<First />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });
});