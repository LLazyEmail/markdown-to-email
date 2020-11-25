
exports.default = Address;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Address() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'strong',
            null,
            'Our mailing address is:'
        ),
        _react2.default.createElement('br', null),
        'PO Box 2206, Edwards CO, 81632, U.S.A.'
    );
}