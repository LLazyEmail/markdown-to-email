'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ListItem;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListItem(props) {
    return _react2.default.createElement(
        'li',
        { style: _styles2.default.li },
        _react2.default.createElement(
            'p',
            { dir: 'ltr', role: 'presentation', style: _styles2.default.presentation, 'data-testid': 'listItemTest' },
            props.children
        )
    );
}