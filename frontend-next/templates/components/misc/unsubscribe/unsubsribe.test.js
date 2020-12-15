const _reactDom = require('react-dom');

const _reactDom2 = _interopRequireDefault(_reactDom);

const _index = require('./index');

const _index2 = _interopRequireDefault(_index);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _react3 = require('@testing-library/react');

const _reactTestRenderer = require('react-test-renderer');
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Unsubscribe from './Unsubscribe';

configure({ adapter: new Adapter() });

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(() => {
  (0, _react3.cleanup)();
});

describe('unsubscribe/index component', () => {

    it('Unsubscribe component has an <a> element with no empty value and correct data attribute', () => {
        const wrapper = shallow(<Unsubscribe />)
        const trendline = wrapper.find('a');
        expect(trendline.props()).toHaveProperty('data-testid', 'unsubscribeTest');
        expect(trendline.text()).toEqual('unsubscribe');
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
    const _render = (0, _react3.render)(_react2.default.createElement(_index2.default, { hrefUnsub: 'https://www.youtube.com/' }));
    const { getByTestId } = _render;

    const a = getByTestId('unsubscribeTest');

    expect(a.href).toBe('https://www.youtube.com/');
  });
});
