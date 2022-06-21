import { replaceWrapper, newLine, beforeBeginingNewLine } from '../helpers';





function blockquote(text, tmp, item) {
  return `${newLine}<blockquote>${item.trim()}</blockquote>`;
}

// TODO remove unused `text` argument
function previewText(text, content) {
  const config = {
    content,
    folder: 'body',
  };

  this.errors.previewText = true;





  const replaced = replaceWrapper('previewText', config, 'body');

  return replaced;
}



function header(text, chars, content) {
  const config = {
    content: content.trim(),
  };

  const titleType = ['title', 'subtitle', 'heading'];




  
  const replaced = replaceWrapper(titleType[chars.length - 1], config);

  const result = newLine + replaced;

  return result;
}

export {
  strong,
  link,
  blockquote,
  mem,
  header,

  // italic,
  // del,
  // q,
  // code,
  // hr,
  // empty,

  previewText,
};
