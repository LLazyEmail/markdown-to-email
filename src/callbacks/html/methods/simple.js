import { beforeBeginingNewLine } from '../helpers';

// explore why some methods dont have a config,
// but others have it and call replaceWrapper
function _blockquote(text, tmp, item) {
  const tag = `<blockquote>${item.trim()}</blockquote>`;
  return beforeBeginingNewLine(tag);
}

export default _blockquote;
