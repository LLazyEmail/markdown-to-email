'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = PreviewText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PreviewText(props) {
    return _react2.default.createElement(
        'span',
        { className: 'mcnPreviewText', style: _styles2.default.previewText },
        props.children
    );
}