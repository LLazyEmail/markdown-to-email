'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Sponsor;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sponsor(props) {
    return _react2.default.createElement(
        'table',
        { border: 0, cellPadding: 0, cellSpacing: 0, className: 'mcnImageCardRightContentOuter', width: '100%', style: _styles2.default.imageCardRightContentOuter },
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    { align: 'center', valign: 'top', className: 'mcnImageCardRightContentInner', style: _styles2.default.imageCardRightContentInner },
                    _react2.default.createElement(
                        'table',
                        { align: 'left', border: 0, cellPadding: 0, cellSpacing: 0, className: 'mcnImageCardRightImageContentContainer', width: 200, style: _styles2.default.imageCardRightContentContainer },
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    { className: 'mcnImageCardRightImageContent', align: 'center', valign: 'top', style: _styles2.default.imageCardRightContent },
                                    _react2.default.createElement(
                                        'a',
                                        { href: props.leftHref, 'data-testid': 'sponsorHrefTest', title: true, className: true, target: '_blank', style: _styles2.default.title },
                                        _react2.default.createElement('img', { alt: '', src: props.leftSrc, width: 150, 'data-testid': 'sponsorSrcTest', style: _styles2.default.image, className: 'mcnImage' })
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'table',
                        { className: 'mcnImageCardRightTextContentContainer', align: 'right', border: 0, cellPadding: 0, cellSpacing: 0, width: 346, style: _styles2.default.imageCardRightContentContainer },
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    { valign: 'top', className: 'mcnTextContent', style: _styles2.default.textContent },
                                    _react2.default.createElement(
                                        'h1',
                                        { className: 'mc-toc-title', style: _styles2.default.docTitle },
                                        _react2.default.createElement('br', null),
                                        _react2.default.createElement(
                                            'a',
                                            { href: props.rightHref, style: _styles2.default.link },
                                            _react2.default.createElement(
                                                'strong',
                                                { id: 'docs-internal-guid-98b2620b-7fff-d936-82b8-a8d3a3d3c470', 'data-testid': 'sponsorChildrenTest' },
                                                props.children
                                            )
                                        )
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

module.exports = Sponsor;