import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Copyright from './Copyrights';

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

describe('copyrights/index component', () => {

    it('Copyright component has an <em> element with correct data attribute', () => {
        const wrapper = shallow(<Copyright />)
        const trendline = wrapper.find('em');
        expect(trendline.props()).toHaveProperty('data-testid', 'copyTest');
    })

  test('renders without crashing', () => {
    const div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_index2.default, null), div);
    _reactDom2.default.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = (0, _reactTestRenderer.create)(_react2.default.createElement(_index2.default, null));
    expect(tree).toMatchSnapshot(); // .toJSON()
  });

  test('<em> has correct text content', () => {
    const _render = (0, _react3.render)(_react2.default.createElement(_index2.default, null));
    const { getByTestId } = _render;

    const em = getByTestId('copyTest');

    const year = new Date().getFullYear();

    expect(em.textContent).toBe(`Copyright \xA9${year} Hacker Noon. All rights reserved.`);
  });
});
