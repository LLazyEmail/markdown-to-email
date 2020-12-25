import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import First from './index';

describe('First/First component', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<First />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('renders correctly', () => {
        const wrapper = create(<First />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});