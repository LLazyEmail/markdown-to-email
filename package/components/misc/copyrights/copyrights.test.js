import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Copyright from './index';

configure({ adapter: new Adapter() });


describe('copyrights/index component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Copyright />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly (Snapshot)', () => {
        const wrapper = renderer.create(<Copyright />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('<em> has correct data attribute', () => {
        const wrapper = shallow(<Copyright />);
        const em = wrapper.find('em');
        expect(em.props()).toHaveProperty('data-testid', 'copyTest');
    });

    it('Checking <em> text', () => {
        const wrapper = shallow(<Copyright />);
        const em = wrapper.find('em');
        expect(em.text()).toEqual(`Copyright ©${new Date().getFullYear()} Hacker Noon. All rights reserved.`)
    })
});
