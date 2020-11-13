'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SubTitle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SubTitle(props) {
    return _react2.default.createElement(
        'p',
        { dir: 'ltr', style: _styles2.default.ltr },
        _react2.default.createElement(
            'span',
            { style: _styles2.default.spanFont },
            _react2.default.createElement(
                'span',
                { style: _styles2.default.spanSize },
                _react2.default.createElement(
                    'strong',
                    { id: 'docs-internal-guid-f6b1a81c-7fff-34dc-bbec-422bbeefc6f2', 'data-testid': 'subtitleChildrenTest' },
                    props.children
                )
            )
        )
    );
}