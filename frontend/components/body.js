'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Body;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _logoTop = require('./body/logoTop');

var _logoTop2 = _interopRequireDefault(_logoTop);

var _logoBottom = require('./body/logoBottom');

var _logoBottom2 = _interopRequireDefault(_logoBottom);

var _divider = require('./body/divider');

var _divider2 = _interopRequireDefault(_divider);

var _footer = require('./body/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Body(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { style: { textAlign: "center" } },
            _react2.default.createElement(
                'table',
                { align: 'center', border: 0, cellPadding: 0, cellSpacing: 0, height: '100%', width: '100%',
                    id: 'bodyTable', style: _styles2.default.bodyTable },
                _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            { align: 'center', valign: 'top', id: 'bodyCell', style: _styles2.default.bodyCell },
                            _react2.default.createElement(
                                'table',
                                { border: 0, cellPadding: 0, cellSpacing: 0, width: '100%', className: 'templateContainer',
                                    style: _styles2.default.templateContainer },
                                _react2.default.createElement(
                                    'tbody',
                                    null,
                                    _react2.default.createElement(
                                        'tr',
                                        null,
                                        _react2.default.createElement(
                                            'td',
                                            { valign: 'top', id: 'templatePreheader', style: _styles2.default.templatePreheader },
                                            _react2.default.createElement(_logoTop2.default, null)
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'tr',
                                        null,
                                        _react2.default.createElement(
                                            'td',
                                            { valign: 'top', id: 'templateHeader', style: _styles2.default.templateHeader, 'data-testid': 'bodyPropsTest' },
                                            props.header
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'tr',
                                        null,
                                        _react2.default.createElement(
                                            'td',
                                            { valign: 'top', id: 'templateBody', style: _styles2.default.templateBody },
                                            _react2.default.createElement(
                                                _divider2.default,
                                                null,
                                                props.children
                                            ),
                                            _react2.default.createElement(_logoBottom2.default, null)
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(_footer2.default, null)
                        )
                    )
                )
            )
        )
    );
}