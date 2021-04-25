import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import styles from './styles';
import ListItem from './item';

configure({ adapter: new Adapter() });

describe('ListItem component', () => {
    it('<ListItem> receives styles', () => {
        const wrapper = shallow(<ListItem />);
        const li = wrapper.find('li');
        const p = wrapper.find('p');
        expect(li.props()).toHaveProperty('style', styles.li);
        expect(p.props()).toHaveProperty('style', styles.presentation);
    })

    it('<ListItem > should containe <li> element', () => {
        const wrapper = shallow(<ListItem />);
        expect(wrapper.html()).toContain('li');
    });

    it('checking <p> attributes', () => {
        const wrapper = shallow(<ListItem />);
        const p = wrapper.find('p');
        expect(p.props()).toHaveProperty('dir', 'ltr')
    }) 

    it('checking <p> attributes', () => {
        const wrapper = shallow(<ListItem />);
        const p = wrapper.find('p');
        expect(p.props()).toHaveProperty('role', 'presentation')
    }) 

    it('checking <p> attributes', () => {
        const wrapper = shallow(<ListItem />);
        const p = wrapper.find('p');
        expect(p.props()).toHaveProperty('data-testid', 'listItemTest')
    }) 

    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListItem />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('renders correctly', () => {
        const tree = create(<ListItem><span>Some text</span></ListItem>);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('compoents props should contain children(h1) elements', () => {
        const component = create(<ListItem><span>Some text</span></ListItem>);
        const { root } = component;
        expect(root.props.children.type).toBe('span');
    });

    test('<p> has correct children elements', () => {
        const { getByTestId } = render(<ListItem><span>Hello</span></ListItem>);
        const p = getByTestId('listItemTest');

        expect(p.children[0].textContent).toBe('Hello');
    });
});
