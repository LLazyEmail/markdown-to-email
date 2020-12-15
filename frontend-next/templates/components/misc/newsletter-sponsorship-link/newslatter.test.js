const _reactDom = require('react-dom');
const _reactDom2 = _interopRequireDefault(_reactDom);
const _index = require('./index');
const _index2 = _interopRequireDefault(_index);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _react3 = require('@testing-library/react');

const _reactTestRenderer = require('react-test-renderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Newsletter from './Newsletter';

configure({ adapter: new Adapter() });

afterEach(() => {
  (0, _react3.cleanup)();
});

describe('newslatter/index component', () => {

    it('Newsletter component has an <a> element with no empty value and correct attributes', () => {
        const wrapper = shallow(<Newsletter />)
        const trendline = wrapper.find('a');
        expect(trendline.props()).toHaveProperty('data-testid', 'newslatterHrefTest');
        expect(trendline.props()).toHaveProperty('target', '_blank');
        expect(trendline.text()).toEqual('Click Here To Sponsor A Newsletter by Hacker Noon');
    })

  test('renders without crashing', () => {
    const div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_index2.default, null), div);
    _reactDom2.default.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = (0, _reactTestRenderer.create)(_react2.default.createElement(_index2.default, null));
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('<a> has correct href', () => {
    const _render = (0, _react3.render)(_react2.default.createElement(_index2.default, null));
    const { getByTestId } = _render;

    const a = getByTestId('newslatterHrefTest');

    expect(a.href).toBe('https://sponsor.hackernoon.com/contact');
  });
});
