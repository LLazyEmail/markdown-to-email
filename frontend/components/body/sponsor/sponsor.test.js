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

afterEach(function () {
    (0, _react3.cleanup)();
});

describe("sponsor/index component", function () {

    test("renders without crashing", function () {
        var div = document.createElement('div');
        _reactDom2.default.render(_react2.default.createElement(_index2.default, null), div);
        _reactDom2.default.unmountComponentAtNode(div);
    });

    test('renders correctly', function () {
        var tree = (0, _reactTestRenderer.create)(_react2.default.createElement(_index2.default, null));
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test("compoents props contains anything", function () {
        var component = (0, _reactTestRenderer.create)(_react2.default.createElement(_index2.default, null, _react2.default.createElement("h1", null, "Hello")));
        var root = component.root;

        expect(root.props.children).not.toBeNull();
    });

    test("strong contains correct children elements", function () {
        var _render = (0, _react3.render)(_react2.default.createElement(_index2.default, null, _react2.default.createElement("h1", null, "Hello"))),
            getByTestId = _render.getByTestId;

        var strong = getByTestId("sponsorChildrenTest");

        expect(strong.children[0].textContent).toBe('Hello');
    });

    test("compoents children element should contain correct element", function () {
        var component = (0, _reactTestRenderer.create)(_react2.default.createElement(_index2.default, null, _react2.default.createElement("h1", null, "Hello")));
        var root = component.root;

        expect(root.props.children.type).toBe("h1");
    });

    test("compoents props elements should contain correct data", function () {
        var component = (0, _reactTestRenderer.create)(_react2.default.createElement(_index2.default, { leftHref: "https://www.youtube.com", leftSrc: "../main/img.png", rightHref: "https://vk.com/" }));
        var root = component.root;

        expect(root.props.leftHref).toBe("https://www.youtube.com");
        expect(root.props.rightHref).toBe("https://vk.com/");
        expect(root.props.leftSrc).toBe("../main/img.png");
    });

    test("<a> has correct href", function () {
        var _render2 = (0, _react3.render)(_react2.default.createElement(_index2.default, { leftHref: "https://www.youtube.com/", leftSrc: "../main/img.png", rightHref: "https://vk.com/" })),
            getByTestId = _render2.getByTestId;

        var a = getByTestId("sponsorHrefTest");

        expect(a.href).toBe('https://www.youtube.com/');
    });

    test("<img> has correct src", function () {
        var _render3 = (0, _react3.render)(_react2.default.createElement(_index2.default, { leftHref: "https://www.youtube.com", leftSrc: "main/img.png", rightHref: "https://vk.com/" })),
            getByTestId = _render3.getByTestId;

        var img = getByTestId("sponsorSrcTest");

        expect(img.src).toBe('http://localhost/main/img.png');
    });
});