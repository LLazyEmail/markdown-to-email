import { newLine } from '../../domain/helper-methods';

import { commonReplace } from '../../domain/replace-wrapper3.0/commonReplace';

const _hr = () => `${newLine}<hr />`;
const _empty = () => '';

function _code(text, content) {
  const params = {
    content,
  };

  const config = {
    configurationMap: this.configurationMap,
    params,
    name: 'code',
    debug: true,
  };

  const replaced = commonReplace(config);

  return replaced;
}

function _del(text, content) {
  const params = {
    content,
  };

  const config = {
    configurationMap: this.configurationMap,
    params,
    name: 'del',
    debug: true,
  };
  const replaced = commonReplace(config);

  return replaced;
}

function _q(text, content) {
  const params = {
    content,
  };

  const config = {
    configurationMap: this.configurationMap,
    params,
    name: 'q',
    debug: true,
  };
  const replaced = commonReplace(config);

  return replaced;
}

function _italic(
  text,
  left,
  _,
  content,
  // right
) {
  const config = {
    configurationMap: this.configurationMap,
    params: {
      content,
    },
    name: 'italic',
    debug: true,
  };

  return commonReplace(config);
}

function _strong(text, doubleAsterix, content, asterix) {
  const params = {
    content: `${content + asterix}`,
  };

  const config = {
    configurationMap: this.configurationMap,
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
    configurationMap: this.configurationMap,
    params,
    name: 'link',
    // debug: true,
  };

  const replaced = commonReplace(config);

  return replaced;
}

function _blockquote() {
  // text,
  // tmp,
  // item
  // const params = {
  //   content: `${newLine}${item.trim()}`,
  // };
  // const config = {
  // configurationMap: this.configurationMap,
  //   params,
  //   name: 'blockquote',
  //   debug: true,
  // };
}

export {
  _strong,
  _link,
  _blockquote,
  // _header,
  _italic,
  _del,
  _q,
  _code,
  _hr,
  _empty,
};
