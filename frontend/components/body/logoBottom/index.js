'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = LogoBottom;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LogoBottom() {
    return _react2.default.createElement(
        'table',
        { border: 0, cellPadding: 0, cellSpacing: 0, width: '100%', className: 'mcnImageBlock', style: _styles2.default.imageBlock },
        _react2.default.createElement(
            'tbody',
            { className: 'mcnImageBlockOuter' },
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    { valign: 'top', style: _styles2.default.imageBlockInner, className: 'mcnImageBlockInner' },
                    _react2.default.createElement(
                        'table',
                        { align: 'left', width: '100%', border: 0, cellPadding: 0, cellSpacing: 0,
                            className: 'mcnImageContentContainer', style: _styles2.default.imageContentContainer },
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    { className: 'mcnImageContent', valign: 'top', style: _styles2.default.imageContent },
                                    _react2.default.createElement(
                                        'a',
                                        { href: 'https://hackernoon.com/', title: true, className: true, target: '_blank', style: _styles2.default.title },
                                        _react2.default.createElement('img', { align: 'center', alt: '',
                                            src: 'https://raw.githubusercontent.com/atherdon/newsletters/master/archive/logos/brand/hackernoon.png',
                                            width: 564, style: _styles2.default.img, className: 'mcnImage' })
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}