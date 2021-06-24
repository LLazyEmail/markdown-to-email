import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Head from './Head';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Head/Head component', () => {
  it('<Head > has an <div> element', () => {
    const wrapper = shallow(<Head />);
    expect(wrapper.html()).toContain('div');
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Head />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const wrapper = create(<Head />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});