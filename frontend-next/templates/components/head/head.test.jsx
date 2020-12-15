import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Head from './head';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Fonts from './fonts';

configure({ adapter: new Adapter() });

describe('head component', () => {

    it('Head component has an <a> element with no empty value and correct attributes', () => {
        const wrapper = shallow(<Head />)
        const trendline = wrapper.find('title');
        expect(trendline.text()).toEqual('The Secrets of High-Performing DevOps teams');
    })

    it('Head component contains <Fonts> component and it renders', () => {
        const wrapper = shallow(<Head />)
        expect(wrapper.contains(<Fonts />)).toEqual(true);
    })

  test('renders without crashing', () => {
    const div = document.createElement('html'); // div was
    ReactDOM.render(<Head />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Head />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
