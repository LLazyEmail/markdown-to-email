import React from 'react';
import { create } from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import Logo from './index';

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});

describe('Logo/index component', () => {

  it('Checking <a> href attributes', () => {
    const wrapper = shallow(<Logo />);
    const a = wrapper.find('a');
    expect(a.props()).toHaveProperty('href', 'https://www.hackernoon.com');
    expect(a.props()).toHaveProperty('target', '_blank');
  });

  it('Checking <img> element', () => {
    const wrapper = shallow(<Logo />);
    const img = wrapper.find('img');
    expect(img.props()).toHaveProperty('src', 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/logos/brand/hackernoon.png');
    expect(img.props()).toHaveProperty('align', 'center');
    expect(img.props()).toHaveProperty('width', 600);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Logo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Logo><h1>Some text</h1></Logo>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correctly', () => {
    const tree = create(<Logo />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
