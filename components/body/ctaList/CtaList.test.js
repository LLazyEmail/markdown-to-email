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
});