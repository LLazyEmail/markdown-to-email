'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = MainTitle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MainTitle(props) {
    return _react2.default.createElement(
        'h1',
        { className: 'mc-toc-title', dir: 'ltr', style: _styles2.default.title },
        _react2.default.createElement(
            'span',
            { style: _styles2.default.spanFont },
            _react2.default.createElement(
                'span',
                { style: _styles2.default.spanSize, 'data-testid': 'mainTitleChildrenTest' },
                props.children
            )
        )
    );
}