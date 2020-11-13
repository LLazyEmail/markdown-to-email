"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react3 = require("@testing-library/react");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

describe("List component", function () {

    test("renders without crashing", function () {
        var div = document.createElement('div');
        _reactDom2.default.render(_react2.default.createElement(_index2.default, null), div);
        _reactDom2.default.unmountComponentAtNode(div);
    });

    test('renders correctly', function () {
        var tree = (0, _reactTestRenderer.create)(_react2.default.createElement(_index2.default, null, _react2.default.createElement("h1", null, "Some text")));
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test("compoents props should contain children(h1) elements", function () {
        var component = (0, _reactTestRenderer.create)(_react2.default.createElement(_index2.default, null, _react2.default.createElement("h1", null, "Some text")));
        var root = component.root;
        expect(root.props.children.type).toBe("h1");
    });

    test("<ul> has correct children elements", function () {
        var _render = (0, _react3.render)(_react2.default.createElement(_index2.default, null, _react2.default.createElement("h1", null, "Hello"))),
            getByTestId = _render.getByTestId;

        var ul = getByTestId("listProsChildrenTest");

        expect(ul.children[0].textContent).toBe("Hello");
    });
});