import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import HOC from './HOC';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { styles } from '../styles';

configure({ adapter: new Adapter() });

describe('HOC/HOC component', () => {
  it('<HOC > has a table', () => {
    const wrapper = shallow(<HOC styles={styles} />);
    expect(wrapper.html()).toContain('table');
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HOC styles={styles} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const wrapper = create(<HOC styles={styles}><h1>HOC content</h1></HOC>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});