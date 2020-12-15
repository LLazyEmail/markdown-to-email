import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Heading from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('heading/index component', () => {

  it('<Heading > renders with correct props.children', () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper.children()).toEqual({});
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Heading />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Heading><h1>Some text</h1></Heading>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('compoents props should contain children(h1) elements', () => {
    const component = create(<Heading><h1>Some text</h1></Heading>);
    const { root } = component;
    expect(root.props.children.type).toBe('h1');
  });

  test('<span> has correct children element', () => {
    const { getByTestId } = render(<Heading><h1>Hello</h1></Heading>);
    const span = getByTestId('headingChildrenTest');

    expect(span.children[0].textContent).toBe('Hello');
  });
});
