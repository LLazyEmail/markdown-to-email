'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Divider;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Divider() {
    return _react2.default.createElement(
        'table',
        { border: 0, cellPadding: 0, cellSpacing: 0, width: '100%', className: 'mcnDividerBlock', style: _styles2.default.dividerBlock },
        _react2.default.createElement(
            'tbody',
            { className: 'mcnDividerBlockOuter' },
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    { className: 'mcnDividerBlockInner', style: _styles2.default.dividerBlockInner },
                    _react2.default.createElement(
                        'table',
                        { className: 'mcnDividerContent', border: 0, cellPadding: 0, cellSpacing: 0, width: '100%',
                            style: _styles2.default.dividerContent },
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    { style: _styles2.default.td },
                                    _react2.default.createElement('span', null)
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}