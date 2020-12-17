import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Address from './index';

const _reactDom = require('react-dom');

const _reactDom2 = _interopRequireDefault(_reactDom);

const _index = require('./index');

const _index2 = _interopRequireDefault(_index);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _react3 = require('@testing-library/react');

const _reactTestRenderer = require('react-test-renderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

configure({ adapter: new Adapter() });

afterEach(() => {
  (0, _react3.cleanup)();
});

describe('address/index component', () => {

    it('<Address > renders with correct length 1 div element', () => {
        const wrapper = shallow(<Address />);
        expect(wrapper).toHaveLength(1);
    });

    it('<strong> elements has correct text', () => {
        const wrapper = shallow(<Address />);
        const elem = wrapper.find('strong');
        expect(elem.text()).toEqual('Our mailing address is:');
    });

    it('<Address > element renders correct address', () => {
        const wrapper = shallow(<Address />);
        expect(wrapper.text()).toEqual('Our mailing address is:PO Box 2206, Edwards CO, 81632, U.S.A.');
    });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_index2.default, null), div);
    _reactDom2.default.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = (0, _reactTestRenderer.create)(_react2.default.createElement(_index2.default, null));
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
