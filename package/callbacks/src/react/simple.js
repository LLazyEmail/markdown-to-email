import { replaceReactWrapper, newLine } from '../helpers';

const hr = `${newLine}<hr />`;
const empty = '';

function previewText(text, content) {
  const config = {
    content: content,
    folder: 'body'
  };



  //wouldnt work well
  this.previewText = true;


  const replaced = replaceReactWrapper(
    'previewText', 
    config,
    'body'
  );
  
  return replaced;
}

function code(text, content) {
  const config = {
    content,
  };

  const replaced = replaceReactWrapper(
    'code', 
    config
  );

  return replaced;
}

function del(text, content) {
  const config = {
    content,
  };

  const replaced = replaceReactWrapper(
    'del', 
    config
  );

  return replaced;
}

function q(text, content) {
  const config = {
    content,
  };

  const replaced = replaceReactWrapper(
    'q', 
    config
  );

  return replaced;
}

function italic(text, left, _, content, right) {
  const config = {
    content,
  };

  const replaced = replaceReactWrapper(
    'italic', 
    config
  );

  return replaced;
}

function strong(text, doubleAsterix, content, asterix) {
  const config = {
    content: `${content + asterix}`,
  };

  const replaced = replaceReactWrapper(
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

  const replaced = replaceReactWrapper(
    'link', 
    config
  );

  return replaced;
}

function blockquote(text, tmp, item) {
  const config = {
    content: `${newLine}${item.trim()}`,
  };

  const replaced = replaceReactWrapper(
    'blockquote', 
    config
  );

  return replaced;
}

function mem(text, src, href, altText) {
  const config = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };

  const replaced = replaceReactWrapper(
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
    'mainTitle', 
    'subtitle',
     'heading'
    ];

    const replaced = replaceReactWrapper(
      titleType[chars.length - 1], 
      config
    );


  return newLine + replaced;
}

function separator() {
  const config = {};


  const replaced = replaceReactWrapper(
    'separator', 
    config
  );


  return newLine + replaced + newLine;
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
