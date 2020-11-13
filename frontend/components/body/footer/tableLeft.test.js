"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactTestRenderer = require("react-test-renderer");

var _tableLeft = require("./tableLeft");

var _tableLeft2 = _interopRequireDefault(_tableLeft);

var _react3 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(function () {
    (0, _react3.cleanup)();
});

describe("tableLeft/index component", function () {

    test("renders without crashing", function () {
        var div = document.createElement('div');
        _reactDom2.default.render(_react2.default.createElement(_tableLeft2.default, null), div);
        _reactDom2.default.unmountComponentAtNode(div);
    });

    test('renders correctly', function () {
        var tree = (0, _reactTestRenderer.create)(_react2.default.createElement(_tableLeft2.default, null));
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test("compoents props elements should contain correct data", function () {
        var component = (0, _reactTestRenderer.create)(_react2.default.createElement(_tableLeft2.default, { href: "https://www.youtube.com", src: "../img/any.jpeg", alt: "PHOTO" }));
        var root = component.root;

        expect(root.props.href).toBe("https://www.youtube.com");
        expect(root.props.src).toBe("../img/any.jpeg");
        expect(root.props.alt).toBe("PHOTO");
    });

    test("<img> has correct alt and src", function () {
        var _render = (0, _react3.render)(_react2.default.createElement(_tableLeft2.default, { href: "https://www.youtube.com", src: "../img/any.jpeg", alt: "PHOTO" })),
            getByTestId = _render.getByTestId;

        var img = getByTestId("tableLeftImgTest");

        expect(img.src).toBe("http://localhost/img/any.jpeg");
        expect(img.alt).toBe("PHOTO");
    });

    test("<a> has correct alt and src", function () {
        var _render2 = (0, _react3.render)(_react2.default.createElement(_tableLeft2.default, { href: "https://www.youtube.com", src: "../img/any.jpeg", alt: "PHOTO" })),
            getByTestId = _render2.getByTestId;

        var a = getByTestId("tableLeftHrefTest");

        expect(a.href).toBe("https://www.youtube.com/");
    });
});