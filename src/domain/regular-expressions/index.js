/* eslint-disable prefer-regex-literals */
//------------------
// -- additional new RegExes

import os from 'os';

const platform = os.platform();

const newLine = platform === 'win32' ? '\r\n' : '\n';
//---------------
const regexVariable = `\\s{4}\\*(.*?)${newLine}`;
const REGEXP_SUB_LISTS = new RegExp(regexVariable, 'g');

// italic for underscore /(\s|>)(_)(.*?)\2(\s|<)/
// `\\s{4}\\*(.*?)${newLine}`;
// const regex_italic_underscore = `/(\\s|>)(_)(.*?)\2(\\s|<)/`;
// const REGEXP_UNDERSCORE_ITALIC = RegExp(regex_italic_underscore, 'g');

const REGEXP_UNDERSCORE_ITALIC = /(\\s|>)(_)(.*?)\2(\\s|<)/g;

// `\\s{4}\\*(.*?)${newLine}`;
// const regex_italic_asterix = `\*(?![*\\s])(?:[^*]*[^*\\s])?\*`;
// const REGEXP_ASTERIX_ITALIC = RegExp(regex_italic_asterix, 'g');
const REGEXP_ASTERIX_ITALIC = /(?![*\\s])(?:[^*]*[^*\\s])?/g;

// const REGEXP_EM = /(\s|>)(\*|_)(.*?)\2(\s|<)/g;

//-------
// TODO add that beforeMethod
const regexString = `\\[separator\\]`;
const REGEXP_SEPARATOR = new RegExp(newLine + regexString + newLine, 'g');
//----------

// those RegEx`es might gone after integration of front matter
const REGEXP_SPONSORSHIP = /~(\[(.*?)\]){3}/g;
const REGEXP_HTML_COMMENTS = /<!--(([\r\n]|.)*?)-->/g;
// eslint-disable-next-line no-useless-escape
const REGEXP_MEM = /\!\[(.*?)\]\[(.*?)\]\[(.*?)\]/g;
const REGEXP_PREVIEW_TEXT = new RegExp(`#~(.*?)${newLine}`);
// -----------

const regexString2 = `\\[image\\d\\]`;
const REGEXP_IMAGES_FRONT = new RegExp(newLine + regexString2 + newLine, 'g');

export {
  REGEXP_SUB_LISTS,
  REGEXP_UNDERSCORE_ITALIC,
  REGEXP_ASTERIX_ITALIC,
  REGEXP_SEPARATOR,
  REGEXP_SPONSORSHIP,
  REGEXP_HTML_COMMENTS,
  REGEXP_MEM,
  REGEXP_PREVIEW_TEXT,
  REGEXP_IMAGES_FRONT,
};
