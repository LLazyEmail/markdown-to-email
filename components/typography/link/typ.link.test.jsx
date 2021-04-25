import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Link from './index';

configure({ adapter: new Adapter() });

describe('link/index component', () => {

    it('link target is opening in new window', () => {
        const wrapper = shallow(<Link />);
        const a = wrapper.find('a');
        expect(a.props()).toHaveProperty('target', '_blank');
    })

    it('checking link data attribute', () => {
        const wrapper = shallow(<Link />);
        const a = wrapper.find('a');
        expect(a.props()).toHaveProperty('data-testid', 'linkPropsTest');
    })

    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Link />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('renders correctly', () => {
        const tree = create(<Link><h1>Some text</h1></Link>);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('compoents props should contain children(h1) elements', () => {
        const component = create(<Link><h1>Some text</h1></Link>);
        const { root } = component;
        expect(root.props.children.type).toBe('h1');
    });

    test('<a> has correct src and alt', () => {
        const { getByTestId } = render(<Link href="https://vk.com/feed" />);
        const a = getByTestId('linkPropsTest');

        expect(a.href).toBe('https://vk.com/feed');
    });

    test('<a> has correct children elements', () => {
        const { getByTestId } = render(<Link href="https://vk.com/feed"><h1>Hello</h1></Link>);
        const a = getByTestId('linkPropsTest');

        expect(a.children[0].textContent).toBe('Hello');
    });
});
