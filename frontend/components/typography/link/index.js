'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Link;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Link(props) {
    return _react2.default.createElement(
        'a',
        { href: props.href, target: '_blank', style: _styles2.default.link, 'data-testid': 'linkPropsTest' },
        props.children
    );
}