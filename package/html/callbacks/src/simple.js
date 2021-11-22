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
    content:content,
    folder: 'body'
  };



  this.errors.previewText = true;



  const replaced = replaceWrapper(
    'previewText', 
    config,
    'body'
  );

  return replaced;
}

function strong(text, doubleAsterix, content, asterix) {
  const config = {
    content: `${content + asterix}`,
  };

  const replaced = replaceWrapper(
    'strong', 
    config
  );

  
  return replaced;
}

function link(text, title, href) {
  const config = {
    content: title.trim(),
    href: href.trim(),
  };


  const replaced = replaceWrapper(
    'link', 
    config
  );
  
  return replaced;
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


  const replaced = replaceWrapper(
    'image', 
    config
  );
  
  return replaced;
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

  const replaced = replaceWrapper(
    titleType[chars.length - 1], 
    config
  );
  
  const result = newLine + replaced;

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
