import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Content from './index';

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});

describe('content/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Content />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('compoents children element should "contain"', () => {
    const wrapper = shallow(<Content />);
    const elem = wrapper.find('div');
    expect(elem.text()).toEqual('content');
  })
});
