"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Copyright;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Copyright() {
    return _react2.default.createElement(
        "em",
        { "data-testid": "copyTest" },
        "Copyright \xA9 ",
        new Date().getFullYear(),
        " Hacker Noon. All rights reserved."
    );
}