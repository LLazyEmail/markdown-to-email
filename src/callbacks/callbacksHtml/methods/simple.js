import { replaceWrapper, newLine, beforeBeginingNewLine } from '../helpers';

// explore why some methods dont have a config,
// but others have it and call replaceWrapper
function _blockquote(text, tmp, item) {
  const tag = `<blockquote>${item.trim()}</blockquote>`;
  return beforeBeginingNewLine(tag);
}

// TODO remove unused `text` argument
function _previewText(text, content) {
  const config = {
    content,
    folder: 'body',
  };

  this.errors.previewText = true;

  const replaced = replaceWrapper('previewText', config, 'body');

  return replaced;
}

export {
  // strong,
  // link,
  _blockquote,
  // mem,
  // _header,

  // italic,
  // del,
  // q,
  // code,
  // hr,
  // empty,
  _previewText,
};
