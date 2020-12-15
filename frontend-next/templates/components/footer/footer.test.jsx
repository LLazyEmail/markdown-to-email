import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Footer from './index';

afterEach(() => {
  cleanup();
});

describe('footer/index component', () => {

    it('Footer contains 1 div', () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper).toHaveLength(1);
    });

    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('renders correctly', () => {
        const tree = create(<Footer />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
