import { replaceWrapper, newLine } from '../helpers';

const italic = '$1<em>$3</em>$4';
const del = '<del>$1</del>';
const q = '<q>$1</q>';
const code = '<code>$1</code>';
const hr = `${newLine}<hr />`;
const empty = '';
// const strong = "<strong>$2$3</strong>";


// TODO remove unused `text` argument
function previewText(text, content) {
  const config = {
    content,
  };

  this.errors.previewText = true;



  return replaceWrapper('previewText', config, 'body');
}

function strong(text, doubleAsterix, content, asterix) {
  const config = {
    content: `${content + asterix}`,
  };



  const result = replaceWrapper('strong', config);
  return result;
}

function link(text, title, href) {
  const config = {
    content: title.trim(),
    href: href.trim(),
  };



  const result = replaceWrapper('link', config);
  return result;
}

function blockquote(text, tmp, item) {
  return `${newLine}<blockquote>${item.trim()}</blockquote>`;
}

function mem(text, src, href, altText) {
  const config = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };



  const result = replaceWrapper('image', config);
  return result;
}

function header(text, chars, content) {
  const config = {
    content: content.trim(),
  };

  const titleType = [
    'title',
    'subtitle',
    'heading',
  ];


  
  const result = newLine + replaceWrapper(titleType[chars.length - 1], config);

  return result;
}

export {
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
  previewText
};
