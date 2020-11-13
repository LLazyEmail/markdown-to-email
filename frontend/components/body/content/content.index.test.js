"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react3 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(function () {
    (0, _react3.cleanup)();
});

describe("content/index component", function () {

    test("renders without crashing", function () {
        var div = document.createElement('div');
        _reactDom2.default.render(_react2.default.createElement(_index2.default, null), div);
        _reactDom2.default.unmountComponentAtNode(div);
    });

    test("compoents children element should contain 'content'", function () {
        var component = (0, _reactTestRenderer.create)(_react2.default.createElement(_index2.default, null));
        var root = component.root;

        expect(root.children[0]).toBe("content");
    });
});