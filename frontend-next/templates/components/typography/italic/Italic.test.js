import React from 'react';
import Italic from './Italic';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<MyComponent />', () => {
    it('renders three <Italic > components', () => {
      const wrapper = shallow(<Italic />);
      expect(wrapper.find(Italic)).toHaveLength(0);
    });

    it('<Italic > has an <i> element', () => {
        const wrapper = shallow(<Italic />);
        expect(wrapper.html()).toContain('i');
    });

    it('<Italic > renders with props.children', () => {
        const wrapper = shallow(<Italic />);
        expect(wrapper.children()).toEqual({});
    });
});