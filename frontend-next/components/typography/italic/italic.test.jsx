import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Italic from './index';


describe('italic/Italic component', () => {
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