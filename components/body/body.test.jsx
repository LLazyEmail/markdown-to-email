import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import BodyPrototype from './BodyPrototype';

configure({ adapter: new Adapter() });

describe('body component', () => {
  it('BodyPrototype contains 5 <Paragraph> and they aren`t empty', () => {
    const wrapper = shallow(<BodyPrototype />);
    const td = wrapper.find('Paragraph');
    expect(td).toHaveLength(5);
  })

  it('BodyPrototype <Paragraph>`s aren`t empty', () => {
    const wrapper = shallow(<BodyPrototype />);
    const td = wrapper.find('Paragraph');
    for (let i = 0; i < 5; i++) {
      expect(td.at(i).isEmptyRender()).toBe(false);
    }
  })

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BodyPrototype />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<BodyPrototype><h1>Some text</h1></BodyPrototype>);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe('both Sponsor elements have identical attribute values in BodyPrototype', () => {
  it('1st Sponsor element has correct attributes, links', () => {
    const wrapper = shallow(<BodyPrototype />);
    const table = wrapper.find('Sponsor');
    expect(table.at(0).props()).toHaveProperty('leftHref', 'https://bit.ly/30AWyC4');
    expect(table.at(0).props()).toHaveProperty('rightHref', 'https://bit.ly/30AWyC4');
    expect(table.at(0).props()).toHaveProperty('leftSrc', 'https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/thematic/2020/September/flatfile-logo-black-small-vertical.png');
  })

  it('2nd Sponsor element has correct attributes, links', () => {
    const wrapper = shallow(<BodyPrototype />);
    const table = wrapper.find('Sponsor');
    expect(table.at(1).props()).toHaveProperty('leftHref', 'https://bit.ly/30AWyC4');
    expect(table.at(1).props()).toHaveProperty('rightHref', 'https://bit.ly/30AWyC4');
    expect(table.at(1).props()).toHaveProperty('leftSrc', 'https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/thematic/2020/September/flatfile-logo-black-small-vertical.png');
  })
})

describe('Checking Image-s', () => {
  it('Image has correct path', () => {
    const wrapper = shallow(<BodyPrototype />);
    const table = wrapper.find('Image');
    expect(table.at(0).props()).toHaveProperty('src', 'https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/memes/6.jpg');
  });
  it('Image has correct path', () => {
    const wrapper = shallow(<BodyPrototype />);
    const table = wrapper.find('Image');
    expect(table.at(1).props()).toHaveProperty('src', 'https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/memes/1.png');
  });
  it('Image has correct path', () => {
    const wrapper = shallow(<BodyPrototype />);
    const table = wrapper.find('Image');
    expect(table.at(2).props()).toHaveProperty('src', 'https://raw.githubusercontent.com/atherdon/newsletters/master/archive/img/image1.png');
  });
})

describe('BodyPrototype should contain components: <MainTitle> & <Heading> and text contents', () => {
  it('Checking <MainTitle>', () => {
    const wrapper = shallow(<BodyPrototype />);
    const elem = wrapper.find('MainTitle');
    expect(elem.render().text()).toEqual('Can We Make Data Tidy?');
  })

  it('Checking <Heading>', () => {
    const wrapper = shallow(<BodyPrototype />);
    const elem = wrapper.find('Heading');
    expect(elem.at(0).render().text()).toEqual('What is tidy data?');
    expect(elem.at(1).render().text()).toEqual('Tidy Data Principles');
    expect(elem.at(2).render().text()).toEqual('1. Each row is an observational unit.');
  })
})

describe('testing Divider', () => {
  it('Checking BodyPrototype to contain dividers', () => {
    const wrapper = shallow(<BodyPrototype />);
    expect(wrapper.html()).toContain('Divider');
  })
})