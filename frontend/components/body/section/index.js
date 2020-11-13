'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Section;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Section(props) {
    return _react2.default.createElement(
        'table',
        { border: 0, cellPadding: 0, cellSpacing: 0, width: '100%', className: 'mcnTextBlock', style: _styles2.default.textBlock },
        _react2.default.createElement(
            'tbody',
            { className: 'mcnTextBlockOuter' },
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    { valign: 'top', className: 'mcnTextBlockInner', style: _styles2.default.textBlockInner },
                    _react2.default.createElement(
                        'table',
                        { align: 'left', border: 0, cellPadding: 0, cellSpacing: 0, style: _styles2.default.textContentContainer, width: '100%', className: 'mcnTextContentContainer' },
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    { valign: 'top', className: 'mcnTextContent', label: 'sectionPropsChildren', 'data-testid': 'sectionPropsChildren', style: _styles2.default.textContent },
                                    props.children
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}

module.exports = Section;