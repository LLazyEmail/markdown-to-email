'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Paragraph;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Paragraph(props) {
    return _react2.default.createElement(
        'div',
        { dir: 'ltr', style: _styles2.default.ltr },
        _react2.default.createElement(
            'span',
            { style: _styles2.default.spanFont },
            _react2.default.createElement(
                'span',
                { style: _styles2.default.spanSize, 'data-testid': 'paragraphChildrenTest' },
                props.children
            )
        )
    );
}