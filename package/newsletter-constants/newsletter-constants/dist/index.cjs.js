'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var os = require('os');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var os__default = /*#__PURE__*/_interopDefaultLegacy(os);

var platform = os__default['default'].platform();
var newLine = platform === "win32" ? "\r\n" : "\n";
var REGEXP_HEADER = new RegExp("".concat(newLine, "(#+)(.*)"), 'g');
var REGEXP_IMAGE = /!\[([^\[]+)\]\(([^\)]+)\)/g;
var REGEXP_LINK = /\[([^\[]+)\]\(([^\)]+)\)/g;
var REGEXP_STRONG = /(\*\*|__)(.*?)(\*?)\1/g;
var REGEXP_DEL = /\~\~(.*?)\~\~/g;
var REGEXP_Q = /\:\"(.*?)\"\:/g;
var REGEXP_CODE = /`(.*?)`/g;
var REGEXP_UL_LIST = new RegExp("".concat(newLine, "(((\\s{4})?\\*(.*?)").concat(newLine, "){1,})"), 'g');
var REGEXP_OL_LIST = new RegExp("".concat(newLine, "[0-9]+\\.(.*)"), 'g');
var REGEXP_BLOCKQUOTE = new RegExp("".concat(newLine, "(&gt;|\\>)(.*)"), 'g');
var REGEXP_HR = new RegExp("".concat(newLine, "-{5,}"), 'g');
var REGEXP_PARAGRAPH = new RegExp("".concat(newLine, "(.+?)").concat(newLine), "g");
var REGEXP_EMPTY_UL = /<\/ul>\s?<ul>/g;
var REGEXP_EMPTY_OL = /<\/ol>\s?<ol>/g;
var REGEXP_BR = new RegExp("((".concat(newLine, "){2,})"), "g");
var REGEXP_EMPTY_BLOCKQUOTE = /<\/blockquote><blockquote>/g;
var REGEXP_EM = /(\s|>)(\*|_)(.*?)\2(\s|<)/g;
var REGEXP_SPONSORSHIP = /~(\[(.*?)\]){3}/g;
var REGEXP_HTML_COMMENTS = /<!--(([\r\n]|.)*?)-->/g;
var REGEXP_MEM = /\!\[(.*?)\]\[(.*?)\]\[(.*?)\]/g;
var REGEXP_PREVIEW_TEXT = new RegExp("#~(.*?)".concat(newLine));
var html_tags = {
  REGEXP_HEADER: REGEXP_HEADER,
  REGEXP_IMAGE: REGEXP_IMAGE,
  REGEXP_LINK: REGEXP_LINK,
  REGEXP_STRONG: REGEXP_STRONG,
  REGEXP_DEL: REGEXP_DEL,
  REGEXP_Q: REGEXP_Q,
  REGEXP_CODE: REGEXP_CODE,
  REGEXP_UL_LIST: REGEXP_UL_LIST,
  REGEXP_OL_LIST: REGEXP_OL_LIST,
  REGEXP_BLOCKQUOTE: REGEXP_BLOCKQUOTE,
  REGEXP_HR: REGEXP_HR,
  REGEXP_PARAGRAPH: REGEXP_PARAGRAPH,
  REGEXP_EMPTY_UL: REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL: REGEXP_EMPTY_OL,
  REGEXP_BR: REGEXP_BR,
  REGEXP_EMPTY_BLOCKQUOTE: REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_EM: REGEXP_EM,
  REGEXP_SPONSORSHIP: REGEXP_SPONSORSHIP,
  REGEXP_HTML_COMMENTS: REGEXP_HTML_COMMENTS,
  REGEXP_MEM: REGEXP_MEM,
  REGEXP_PREVIEW_TEXT: REGEXP_PREVIEW_TEXT
};

exports.html_tags = html_tags;
