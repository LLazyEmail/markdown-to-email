'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TableLeft;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableLeft(props) {
    return _react2.default.createElement(
        'table',
        { align: 'left', border: 0, cellPadding: 0, cellSpacing: 0, style: _styles2.default.tableLeft },
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    { valign: 'top', style: _styles2.default.followContentItemContainer, className: 'mcnFollowContentItemContainer' },
                    _react2.default.createElement(
                        'table',
                        { border: 0, cellPadding: 0, cellSpacing: 0, width: '100%', className: 'mcnFollowContentItem',
                            style: _styles2.default.followContentItem },
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    { align: 'left', valign: 'middle', style: _styles2.default.tdLeftMiddle },
                                    _react2.default.createElement(
                                        'table',
                                        { align: 'left', border: 0, cellPadding: 0, cellSpacing: 0, width: true,
                                            style: _styles2.default.tableLeft2 },
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            _react2.default.createElement(
                                                'tr',
                                                null,
                                                _react2.default.createElement(
                                                    'td',
                                                    { align: 'center', valign: 'middle', width: 24, className: 'mcnFollowIconContent',
                                                        style: _styles2.default.followIconContent },
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: props.href, target: '_blank', style: _styles2.default.followSocial, 'data-testid': 'tableLeftHrefTest' },
                                                        _react2.default.createElement('img', { src: props.src, alt: props.alt, style: _styles2.default.followSocialImg,
                                                            height: 24, width: 24, className: true, 'data-testid': 'tableLeftImgTest' })
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
            )
        )
    );
}