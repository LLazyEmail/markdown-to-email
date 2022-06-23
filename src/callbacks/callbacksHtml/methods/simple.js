import { replaceWrapper, newLine, beforeBeginingNewLine } from '../helpers';


// explore why some methods dont have a config, 
// but others have it and call replaceWrapper
function _blockquote(text, tmp, item) {

  var tag = `<blockquote>${item.trim()}</blockquote>`;
  return beforeBeginingNewLine(tag);
  
}

// TODO remove unused `text` argument
function _previewText(text, content) {
  const config = {
    content,
    folder: 'body',
  };

  this.errors.previewText = true;





  const replaced = replaceWrapper(
    'previewText', config, 'body'
    );

  return replaced;
}



function _header(text, chars, content) {
  const config = {
    content: content.trim(),
  };

  const titleType = ['title', 'subtitle', 'heading'];




  
  const replaced = replaceWrapper(titleType[chars.length - 1], config);

  const result = newLine + replaced;

  return result;
}

export {
  // strong,
  // link,
  _blockquote,
  // mem,
  _header,

  // italic,
  // del,
  // q,
  // code,
  // hr,
  // empty,

  _previewText,
};
