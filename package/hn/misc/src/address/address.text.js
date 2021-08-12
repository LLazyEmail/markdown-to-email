import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Address from './Address';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('address/index component', () => {

    it('<Address > renders with correct length 1 div element', () => {
        const wrapper = shallow(<Address />);
        expect(wrapper).toHaveLength(1);
    });

    it('<strong> elements has correct text', () => {
        const wrapper = shallow(<Address />);
        const elem = wrapper.find('strong');
        expect(elem.text()).toEqual('Our mailing address is:');
    })

    it('<Address > element renders correct address', () => {
        const wrapper = shallow(<Address />);
        expect(wrapper.text()).toEqual('Our mailing address is:PO Box 2206, Edwards CO, 81632, U.S.A.');
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly', () => {
        const wrapper = renderer.create(<Address />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});