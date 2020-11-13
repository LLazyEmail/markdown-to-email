'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Head;

var _fonts = require('./misc/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Head() {
    return _react2.default.createElement(
        'head',
        null,
        _react2.default.createElement('meta', { charSet: 'UTF-8' }),
        _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        _react2.default.createElement(
            'title',
            null,
            'The Secrets of High-Performing DevOps teams'
        ),
        _react2.default.createElement('style', null),
        _react2.default.createElement(_fonts2.default, null)
    );
}