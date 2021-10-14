import { 
  replaceWrapper, newLine 
} from './helpers';

const hr = `${newLine}<hr />`;
const empty = '';

function previewText(text, content) {
  const config = {
    content,
  };

  this.previewText = true;


  return replaceWrapper('previewText', config, 'body');
}

function code(text, content) {
  const config = {
    content,
  };



  const result = replaceWrapper('code', config);
  return result;
}

function del(text, content) {
  const config = {
    content,
  };



  const result = replaceWrapper('del', config);
  return result;
}

function q(text, content) {
  const config = {
    content,
  };



  const result = replaceWrapper('q', config);
  return result;
}

function italic(text, left, _, content, right) {
  const config = {
    content,
  };


  const result = replaceWrapper('italic', config);
  return result;
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
  const config = {
    content: `${newLine}${item.trim()}`,
  };


  const result = replaceWrapper('blockquote', config);
  return result;
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
    'mainTitle', 
    'subtitle',
    'heading'
  ];



  const result = newLine + replaceWrapper(titleType[chars.length - 1], config);

  return result;
}

function separator() {
  const config = {};


  
  const result = `${newLine}${replaceWrapper(
    'separator',
    config,
  )}${newLine}`;

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
  previewText,
  separator,
};
