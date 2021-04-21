const { replaceHTMLWrapper, replaceReactWrapper } = require("../helpers");
const { newLine } = require("../utils");

const del = "<del>$1</del>";
const code = "<code>$1</code>";
const hr = `${newLine}<hr />`;
const empty = "";

function previewText(text, content) {
  const config = {
    content,
  };

  this.previewText = true;
  return replaceReactWrapper("previewText", config, "body");
}

function q(text, content){
  const config = {
    content,
  };

  const result = replaceReactWrapper("q", config);
  return result;
}

function italic(text, left, _, content, right) {
  const config = {
    content,
  };
  const result = replaceReactWrapper("italic", config);
  return result;
}

function strong(text, doubleAsterix, content, asterix) {
  const config = {
    content: `${content + asterix}`,
  };

  const result = replaceReactWrapper("strong", config);
  return result;
}

function link(text, title, href) {
  const config = {
    content: title.trim(),
    href: href.trim(),
  };

  const result = replaceReactWrapper("link", config);
  return result;
}

function blockquote(text, tmp, item) {
  return `${newLine}<blockquote>` + item.trim() + "</blockquote>";
}

function mem(text, src, href, altText) {
  const config = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };

  const result = replaceHTMLWrapper("image", config);
  return result;
}

function header(text, chars, content) {
  const config = {
    content: content.trim(),
  };

  const titleType = ["mainTitle", "subtitle", "heading"];

  const result =
    newLine + replaceReactWrapper(titleType[chars.length - 1], config);

  return result;
}

module.exports = {
  strong,
  link,
  blockquote,
  mem,
  header,

  italic,
  del,
  q,
  code,
  hr,
  empty,
  previewText,
};
