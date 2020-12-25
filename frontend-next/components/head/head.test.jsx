import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Head from './head';
import Fonts from './fonts';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('head component', () => {
    it('html documet has correct meta tag (ie browser meta tag)', () => {
        const wrapper = shallow(<Head />);
        const meta = wrapper.find('meta');
        expect(meta.at(1).props()).toHaveProperty('httpEquiv', 'X-UA-Compatible');
        expect(meta.at(1).props()).toHaveProperty('content', 'IE=edge');
    })

    it('html documet has correct meta tag (viewport meta tag)', () => {
        const wrapper = shallow(<Head />);
        const meta = wrapper.find('meta');
        expect(meta.at(2).props()).toHaveProperty('name', 'viewport');
        expect(meta.at(2).props()).toHaveProperty('content', 'width=device-width, initial-scale=1');
    })
    
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
        const div = document.createElement('html');
        ReactDOM.render(<Head />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('renders correctly', () => {
        const tree = create(<Head />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
