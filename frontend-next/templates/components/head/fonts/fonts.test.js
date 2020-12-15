const _reactDom = require('react-dom');

const _reactDom2 = _interopRequireDefault(_reactDom);

const _index = require('./index');

const _index2 = _interopRequireDefault(_index);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _react3 = require('@testing-library/react');

const _reactTestRenderer = require('react-test-renderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(() => {
  (0, _react3.cleanup)();
});

describe('fonts/index component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_index2.default, null), div);
    _reactDom2.default.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = (0, _reactTestRenderer.create)(_react2.default.createElement(_index2.default, null));
    expect(tree).toMatchSnapshot(); // .toJSON()
  });

  test('<link> has correct href', () => {
    const _render = (0, _react3.render)(_react2.default.createElement(_index2.default, null));
    const { getByTestId } = _render;

    const link = getByTestId('fontsHrefTest');

    expect(link.href).toBe('https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Merriweather+Sans:400,400i,700,700i|Source+Sans+Pro:400,400i,700,700i');
  });
});
