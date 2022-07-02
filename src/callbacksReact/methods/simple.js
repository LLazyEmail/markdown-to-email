/* eslint-disable */
import { replaceWrapper, newLine } from '../helpers';

//----------------------

const _hr = () => `${newLine}<hr />`;
const _empty = () => '';

function _code(text, content) {


  // const params = {
  //   content: content.trim(),
  // };

  // const config = {    
  //   params,
  //   name: 'code',
  //   debug: true,
  // };

  const config = {
    content,
  };

  const result = replaceWrapper('code', config);
  return result;
}

function _del(text, content) {
  
    // const params = {
  //   content: content.trim(),
  // };

  // const config = {    
  //   params,
  //   name: 'del',
  //   debug: true,
  // };
  const config = {
    content,
  };

  const result = replaceWrapper('del', config);
  return result;
}

function _q(text, content) {
  
    // const params = {
  //   content: content.trim(),
  // };

  // const config = {    
  //   params,
  //   name: 'q',
  //   debug: true,
  // };
  const config = {
    content,
  };

  const result = replaceWrapper('q', config);
  return result;
}

function _italic(text, left, _, content, right) {
  
    // const params = {
  //   content: content.trim(),
  // };

  // const config = {    
  //   params,
  //   name: 'italic',
  //   debug: true,
  // };
  const config = {
    content,
  };

  const result = replaceWrapper('italic', config);
  return result;
}

function _strong(text, doubleAsterix, content, asterix) {
    // const params = {
  //   content: content.trim(),
  // };

  // const config = {    
  //   params,
  //   name: 'strong',
  //   debug: true,
  // };
  const config = {
    content: `${content + asterix}`,
  };

  const result = replaceWrapper('strong', config);
  return result;
}

function _link(text, title, href) {
  
    // const params = {
  //   content: content.trim(),
  // };

  // const config = {    
  //   params,
  //   name: 'link',
  //   debug: true,
  // };
  const config = {
    content: title.trim(),
    href: href.trim(),
  };

  const result = replaceWrapper('link', config);
  return result;
}

function _blockquote(text, tmp, item) {
    // const params = {
  //   content: content.trim(),
  // };

  // const config = {    
  //   params,
  //   name: 'blockquote',
  //   debug: true,
  // };
  const config = {
    content: `${newLine}${item.trim()}`,
  };

  const result = replaceWrapper('blockquote', config);
  return result;
}

function _meme(text, src, href, altText) {
  
    // const params = {
  //   content: content.trim(),
  // };

  // const config = {    
  //   params,
  //   name: 'meme',
  //   debug: true,
  // };
  const config = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };

  const result = replaceWrapper('image', config);
  return result;
}

function _header(text, chars, content) {
  
    // const params = {
  //   content: content.trim(),
  // };

  // const config = {    
  //   params,
  //   name: 'header',
  //   debug: true,
  // };
  const config = {
    content: content.trim(),
  };

  const titleType = ['mainTitle', 'subtitle', 'heading'];

  const result = newLine + replaceWrapper(titleType[chars.length - 1], config);

  return result;
}

function _separator() {
  
  const config = {};

  const result = `${newLine}${replaceWrapper('separator', config)}${newLine}`;

  return result;
}

function _previewText(text, content) {
  
    // const params = {
  //   content: content.trim(),
  // };

  // const config = {    
  //   params,
  //   name: 'preview',
  //   debug: true,
  // };
  const config = {
    content,
  };

  this.previewText = true;

  return replaceWrapper('previewText', config, 'body');
}

export {
  _strong,
  _link,
  _blockquote,
  _meme,
  _header,
  _italic,
  _del,
  _q,
  _code,
  _hr,
  _empty,
  _previewText,
  _separator,
};
