
exports.default = Unsubscribe;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Unsubscribe(_ref) {
    var hrefUnsub = _ref.hrefUnsub;

    return _react2.default.createElement(
        'a',
        { href: hrefUnsub, style: _styles2.default.unsubscribe, 'data-testid': 'unsubscribeTest' },
        'unsubscribe'
    );
}