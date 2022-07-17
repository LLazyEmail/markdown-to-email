/* eslint-disable */
import { newLine } from '../helpers';

//----------------------
import {commonReplace} from '../../domain/replace-wrapper3.0'


const _hr = () => `${newLine}<hr />`;
const _empty = () => '';

function _code(text, content) {
  const params = {
    content: content,
  };

  const config = {
    params,
    name: 'code',
    debug: true,
  };

    const replaced = commonReplace(config);

    return replaced;

}

function _del(text, content) {
  const params = {
    content: content,
  };

  const config = {
    params,
    name: 'del',
    debug: true,
  };
  const replaced = commonReplace(config);

    return replaced;

}

function _q(text, content) {
  const params = {
    content: content,
  };

  const config = {
    params,
    name: 'q',
    debug: true,
  };
  const replaced = commonReplace(config);

    return replaced;

}

function _italic(text, left, _, content, right) {
  const params = {
    content: content,
  };

  const config = {
    params,
    name: 'italic',
    debug: true,
  };

  const replaced = commonReplace(config);

    return replaced;

}

function _strong(text, doubleAsterix, content, asterix) {
  const params = {
    content: `${content + asterix}`,
  };

  const config = {
    params,
    name: 'strong',
    debug: true,
  };
  const replaced = commonReplace(config);

  return replaced;
}

function _link(text, title, href) {
  const params = {
    content: title.trim(),
    href: href.trim(),
  };

  const config = {
    params,
    name: 'link',
    debug: true,
  };


  // const replaced = commonReplace(config);

  // return replaced;

}

function _blockquote(text, tmp, item) {
  const params = {
    content: `${newLine}${item.trim()}`,
  };

  const config = {
    params,
    name: 'blockquote',
    debug: true,
  };


}

function _meme(text, src, href, altText) {
  // const params = {
  //   src: src.trim(),
  //   altText: altText.trim(),
  //   href: href.trim(),
  // };

  // const config = {
  //   params,
  //   name: 'meme',
  //   debug: true,
  // };

  
  return result;
}

function _header(text, chars, content) {
  const params = {
    content: content.trim(),
  };

  const titleType = ['mainTitle', 'subtitle', 'heading'];
  const name = titleTypes[chars.length - 1];

   const config = {
    params,
    name,

    // debug: true,
  };

  const replaced = commonReplace(config);
  return newLine + replaced;

}

function _separator() {
  const params = {
    content: text.trim(), // we have an issue, when we passing empty params
  };

  const config = {
    params,

    name: 'separator',
    debug: true,
  };

  const replaced = commonReplace(config);
  return newLine + replaced + newLine;

}

function _previewText(text, content) {
  const params = {
    content: content,
  };

  const config = {
    params,
    name: 'preview',
    debug: true,
  };

  // this.previewText = true;

  const replaced = commonReplace(config);
  return replaced;

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
