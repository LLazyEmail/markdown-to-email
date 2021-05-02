import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Unsubscribe from './Unsubscribe';

configure({ adapter: new Adapter() });

describe('unsubscribe/index component', () => {

    it('Unsubscribe component has an <a> element with no empty value and correct href', () => {
        const wrapper = shallow(<Unsubscribe hrefUnsub='https://www.youtube.com/' />)
        const trendline = wrapper.find('a');
        expect(trendline.props()).toHaveProperty('href', 'https://www.youtube.com/');
    })

    it('Unsubscribe component has an <a> element with correct data attribute', () => {
        const wrapper = shallow(<Unsubscribe hrefUnsub='https://www.youtube.com/' />)
        const trendline = wrapper.find('a');
        expect(trendline.props()).toHaveProperty('data-testid', 'unsubscribeTest');
    })
    
    it('Unsubscribe component has an <a> element with correct data attribute', () => {
        const wrapper = shallow(<Unsubscribe />)
        const trendline = wrapper.find('a');
        expect(trendline.text()).toEqual('unsubscribe');
    })
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Unsubscribe />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly (Snapshot)', () => {
        const wrapper = renderer.create(<Unsubscribe />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
