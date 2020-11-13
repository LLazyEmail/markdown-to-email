'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NewsletterSponsorshipLink;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  contact: "https://sponsor.hackernoon.com/contact"
};

function NewsletterSponsorshipLink() {
  return _react2.default.createElement(
    'div',
    { style: _styles2.default.center },
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'a',
      { href: config.contact, 'data-testid': 'newslatterHrefTest', target: '_blank', style: _styles2.default.news },
      'Click Here To Sponsor A Newsletter by Hacker Noon'
    )
  );
}