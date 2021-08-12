import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import JoinUs from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('JoinUs/index component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<JoinUs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = create(<JoinUs />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Link has correct path', () => {
    const wrapper = shallow(<JoinUs />);
    const elem = wrapper.find('a');
    expect(elem.props()).toHaveProperty('href', 'https://hackernoon.com/the-decentralized-internet-writing-contest-fq1i35t4');
    expect(elem.props()).toHaveProperty('target', '_blank');
  });

  it('Link text check', () => {
    const wrapper = shallow(<JoinUs />);
    const elem = wrapper.find('a');
    expect(elem.render().text()).toEqual("\"Join our writing contest and get a chance to win cool prizes\".");
  });
});