import { replaceReactWrapper, newLine } from '../helpers';

const hr = `${newLine}<hr />`;
const empty = '';

function previewText(text, content) {
  const config = {
    content,
  };

  //wouldnt work well
  this.previewText = true;



  return replaceReactWrapper('previewText', config, 'body');
}

function code(text, content) {
  const config = {
    content,
  };



  const result = replaceReactWrapper('code', config);
  return result;
}

function del(text, content) {
  const config = {
    content,
  };



  const result = replaceReactWrapper('del', config);
  return result;
}

function q(text, content) {
  const config = {
    content,
  };



  const result = replaceReactWrapper('q', config);
  return result;
}

function italic(text, left, _, content, right) {
  const config = {
    content,
  };


  const result = replaceReactWrapper('italic', config);
  return result;
}

function strong(text, doubleAsterix, content, asterix) {
  const config = {
    content: `${content + asterix}`,
  };



  const result = replaceReactWrapper('strong', config);
  return result;
}

function link(text, title, href) {
  const config = {
    content: title.trim(),
    href: href.trim(),
  };



  const result = replaceReactWrapper('link', config);
  return result;
}

function blockquote(text, tmp, item) {
  const config = {
    content: `${newLine}${item.trim()}`,
  };


  const result = replaceReactWrapper('blockquote', config);
  return result;
}

function mem(text, src, href, altText) {
  const config = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };



  const result = replaceReactWrapper('image', config);
  return result;
}

function header(text, chars, content) {
  const config = {
    content: content.trim(),
  };

  const titleType = ['mainTitle', 'subtitle', 'heading'];



  const result = newLine + 
    replaceReactWrapper(titleType[chars.length - 1], config);

  return result;
}

function separator() {
  const config = {};


  
  const result = `${newLine}${replaceReactWrapper(
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
