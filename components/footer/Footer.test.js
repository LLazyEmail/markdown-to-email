import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Copyright from 'components/misc/copyrights';
import Address from "components/misc/address";
import Unsubscribe from "components/misc/unsubscribe";
import NewsletterSponsorshipLink from "components/misc/newsletter-sponsorship-link";

configure({ adapter: new Adapter() });

import Footer from './index';

afterEach(() => {
  cleanup();
});

describe('footer/index component', () => {

  it('Footer <td> element contains 6 Table elements', () => {
    const wrapper = shallow(<Footer />);
    const table = wrapper.find('TableLeft')
    expect(table).toHaveLength(6);
  })


  it('Footer contains 1 div', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Footer />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe('Footer/TableLeft component testing to correct links and attributes', () => {
  it('First TableLeft element has correct attributes, links', () => {
    const wrapper = shallow(<Footer />);
    const table = wrapper.find('TableLeft');
    expect(table.at(0).props()).toHaveProperty('href', 'https://twitter.com/hackernoon');
    expect(table.at(0).props()).toHaveProperty('src', 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/twitter.png');
    expect(table.at(0).props()).toHaveProperty('alt', 'Twitter');
  })

  it('Second TableLeft element has correct attributes, links', () => {
    const wrapper = shallow(<Footer />);
    const table = wrapper.find('TableLeft');
    expect(table.at(1).props()).toHaveProperty('href', 'https://www.facebook.com/hackernoon');
    expect(table.at(1).props()).toHaveProperty('src', 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/facebook.png');
    expect(table.at(1).props()).toHaveProperty('alt', 'Facebook');
  })

  it('Third TableLeft element has correct attributes, links', () => {
    const wrapper = shallow(<Footer />);
    const table = wrapper.find('TableLeft');
    expect(table.at(2).props()).toHaveProperty('href', 'https://instagram.com/hackernoon/');
    expect(table.at(2).props()).toHaveProperty('src', 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/instagram.png');
    expect(table.at(2).props()).toHaveProperty('alt', 'Instagram');
  })

  it('Fourth TableLeft element has correct attributes, links', () => {
    const wrapper = shallow(<Footer />);
    const table = wrapper.find('TableLeft');
    expect(table.at(3).props()).toHaveProperty('href', 'https://hackernoon.com');
    expect(table.at(3).props()).toHaveProperty('src', 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/link.png');
    expect(table.at(3).props()).toHaveProperty('alt', 'Website');
  })

  it('Fifth TableLeft element has correct attributes, links', () => {
    const wrapper = shallow(<Footer />);
    const table = wrapper.find('TableLeft');
    expect(table.at(4).props()).toHaveProperty('href', 'https://www.youtube.com/channel/UChu5YILgrOYOfkfRlTB-D-g');
    expect(table.at(4).props()).toHaveProperty('src', 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/youtube.png');
    expect(table.at(4).props()).toHaveProperty('alt', 'YouTube');
  })

  it('Sixth TableLeft element has correct attributes, links', () => {
    const wrapper = shallow(<Footer />);
    const table = wrapper.find('TableLeft');
    expect(table.at(5).props()).toHaveProperty('href', 'mailto:stories@hackernoon.com');
    expect(table.at(5).props()).toHaveProperty('src', 'https://creative-images-upld.s3.amazonaws.com/creative/newsletters/icons/forwardtofriend.png');
    expect(table.at(5).props()).toHaveProperty('alt', 'Email');
  })
});

describe('checking if .mcnTextContent contains 4 other components', () => {
  it('Checking <Copyright>', () => {
    const wrapper = shallow(<Footer />);
    const td = wrapper.find('.mcnTextContent');
    expect(td.contains(<Copyright />)).toBe(true);
  })
  it('Checking <Address>', () => {
    const wrapper = shallow(<Footer />);
    const td = wrapper.find('.mcnTextContent');
    expect(td.contains(<Address />)).toBe(true);
  })
  it('Checking <Unsubscribe>', () => {
    const wrapper = shallow(<Footer />);
    const td = wrapper.find('.mcnTextContent');
    expect(td.contains(<Unsubscribe />)).toBe(true);
  })
  it('Checking <NewsletterSponsorshipLink>', () => {
    const wrapper = shallow(<Footer />);
    const td = wrapper.find('.mcnTextContent');
    expect(td.contains(<NewsletterSponsorshipLink />)).toBe(true);
  })
})
