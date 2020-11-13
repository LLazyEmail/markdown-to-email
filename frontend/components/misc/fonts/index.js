"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Fonts;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Fonts() {
    return _react2.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Merriweather+Sans:400,400i,700,700i|Source+Sans+Pro:400,400i,700,700i", "data-testid": "fontsHrefTest", rel: "stylesheet" });
}