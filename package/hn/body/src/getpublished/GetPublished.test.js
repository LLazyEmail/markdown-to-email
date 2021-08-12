import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import GetPublished from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('GetPublished/index component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GetPublished />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = create(<GetPublished />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Link has correct path', () => {
    const wrapper = shallow(<GetPublished />);
    const elem = wrapper.find('a');
    expect(elem.at(0).props()).toHaveProperty('href', 'https://hackernoon.com/signup');
    expect(elem.at(0).props()).toHaveProperty('target', '_blank');
  });

  it('Link text check', () => {
    const wrapper = shallow(<GetPublished />);
    const elem = wrapper.find('a');
    expect(elem.at(0).render().text()).toEqual("Got a tech story to share with our readers?");
  });

  it('Link text check(1)', () => {
    const wrapper = shallow(<GetPublished />);
    const elem = wrapper.find('a');
    expect(elem.at(1).props()).toHaveProperty('href', 'https://publish.hackernoon.com/');
    expect(elem.at(1).props()).toHaveProperty('target', '_blank');
  });

  it('Link has correct path(1)', () => {
    const wrapper = shallow(<GetPublished />);
    const elem = wrapper.find('a');
    expect(elem.at(1).render().text()).toEqual("get it here");
  });
});