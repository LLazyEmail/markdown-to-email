import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Italic from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('italic/Italic component', () => {
    
    it('<Italic > has an <i> element', () => {
        const wrapper = shallow(<Italic />);
        expect(wrapper.html()).toContain('i');
    });

    test('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Italic />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    test('renders correctly', () => {
      const tree = create(<Italic><h1>Some text</h1></Italic>);
      expect(tree.toJSON()).toMatchSnapshot();
    });
});