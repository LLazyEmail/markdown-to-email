const { replaceHTMLWrapper } = require('./helpers');
const { newLine } = require('./utils');

function mem(text, src, href, altText) {
  const config = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };

  const result = replaceHTMLWrapper('image', config);
  return result;
}

module.exports = {

  mem,

};