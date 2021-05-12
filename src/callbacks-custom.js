const { replaceHTMLWrapper } = require('./helpers');

function mem(text, src, href, altText) {
  const config = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };

  const result = replaceHTMLWrapper('image', config);
  return result;
}

function separator() {
  const config = {};

  const result = replaceHTMLWrapper('separator', config);
  return result;
}

module.exports = {
  mem,
  separator,
};
