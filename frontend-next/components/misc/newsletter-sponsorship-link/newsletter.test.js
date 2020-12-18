import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import NewsletterSponsorshipLink from './index';

configure({ adapter: new Adapter() });

describe('newsletter/index component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NewsletterSponsorshipLink />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly (Snapshot)', () => {
        const wrapper = renderer.create(<NewsletterSponsorshipLink />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('Checking <a> attributes', () => {
        const wrapper = shallow(<NewsletterSponsorshipLink />);
        const a = wrapper.find('a');
        expect(a.props()).toHaveProperty('data-testid', 'newsletterHrefTest');
        expect(a.props()).toHaveProperty('target', '_blank');
    });

    it('Checking <a> text and link', () => {
        const wrapper = shallow(<NewsletterSponsorshipLink />);
        const a = wrapper.find('a');
        expect(a.text()).toEqual(`Click Here To Sponsor A Newsletter by Hacker Noon`);
        expect(a.props()).toHaveProperty('href' ,`https://sponsor.hackernoon.com/contact`);
    })
});
