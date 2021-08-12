import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import CtaList from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CtaList/index component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CtaList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = create(<CtaList />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('CtaList should contain a list of elements', () => {
    const wrapper = shallow(<CtaList />);
    const list = wrapper.find('ol').exists();
    expect(list).toEqual(true);
  })

  it('ol in CtaList should contain at least 1 element', () => {
    const wrapper = shallow(<CtaList />);
    const list = wrapper.find('li').length > 1;
    expect(list).toEqual(true);
  })

  it('CtaList header', () => {
    const wrapper = shallow(<CtaList />);
    const list = wrapper.find('strong');
    expect(list.render().text()).toEqual("Ready to Claim Your Internet Name on Hacker Noon?");
  })

  it('CtaList links', () => {
    const wrapper = shallow(<CtaList />);
    const a = wrapper.find('a');
    expect(a.at(0).props()).toHaveProperty('href', 'https://hackernoon.com/signup?ref=noonifications.tech');
    expect(a.at(1).props()).toHaveProperty('href', 'https://app.hackernoon.com/subscriptions?ref=noonifications.tech');
    expect(a.at(2).props()).toHaveProperty('href', 'https://app.hackernoon.com/new?ref=noonifications.tech');
    expect(a.at(3).props()).toHaveProperty('href', 'https://sponsor.hackernoon.com/brand-as-author?ref=noonifications.tech');
    expect(a.at(4).props()).toHaveProperty('href', 'https://hackernoon.com/?ref=noonifications.tech');
  })

  it('CtaList links should be opened in a new window', () => {
    const wrapper = shallow(<CtaList />);
    const a = wrapper.find('a');
    a.forEach((_, index) => {
      expect(a.at(index).props()).toHaveProperty('target', '_blank');
    })
  })
});