"use strict";

var _fs = require("fs");

var fs = _interopRequireWildcard(_fs);

var _prettier = require("prettier");

var _prettier2 = _interopRequireDefault(_prettier);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _head = require("./components/head");

var _head2 = _interopRequireDefault(_head);

var _main = require("./components/main");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

render();

function render() {
  var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(HelloWorldPage, null));
  var htmlWDoc = "<!DOCTYPE html>" + html;
  var prettyHtml = _prettier2.default.format(htmlWDoc, { parser: "html" });
  var outputFile = "./output.html";
  fs.writeFileSync(outputFile, prettyHtml);
  console.log("Wrote " + outputFile);
}

function HelloWorldPage() {
  return _react2.default.createElement(
    "html",
    { lang: "en" },
    _react2.default.createElement(_head2.default, null),
    _react2.default.createElement(_main2.default, null)
  );
}
