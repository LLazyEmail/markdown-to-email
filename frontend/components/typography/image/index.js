'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Image;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Image(props) {
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
          'a',
          { href: props.href, target: '_blank', style: _styles2.default.link },
          _react2.default.createElement('img', { 'data-file-id': 1041068, src: props.src, style: _styles2.default.img, alt: props.alt, 'data-testid': 'imagePropsTest' })
        )
      )
    )
  );
}

module.exports = Image;