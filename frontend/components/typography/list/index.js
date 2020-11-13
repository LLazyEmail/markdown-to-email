"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = List;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function List(props) {
    return _react2.default.createElement(
        "ul",
        { dir: "ltr", "data-testid": "listProsChildrenTest" },
        props.children
    );
}