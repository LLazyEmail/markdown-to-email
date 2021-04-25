import ReactDOM from 'react-dom';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import Fonts from './index';

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});

describe('fonts/index component', () => {
    it('Checking <link> attributes', () => {
        const wrapper = shallow(<Fonts />);
        const link = wrapper.find('link');
        expect(link.props()).toHaveProperty('data-testid', 'fontsHrefTest');
        expect(link.props()).toHaveProperty('rel', 'stylesheet');
        expect(link.props()).toHaveProperty('href', 'https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Merriweather+Sans:400,400i,700,700i|Source+Sans+Pro:400,400i,700,700i');
    });
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Fonts />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('renders correctly', () => {
        const tree = create(<Fonts />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
