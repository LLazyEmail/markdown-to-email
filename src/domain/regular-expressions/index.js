/* eslint-disable prefer-regex-literals */
//------------------
//-- additional new RegExes

import os from 'os';

const platform = os.platform();

const newLine = platform === 'win32' ? '\r\n' : '\n'; 
//---------------
const regex_variable = `\\s{4}\\*(.*?)${newLine}`;
const REGEXP_SUB_LISTS = new RegExp(regex_variable, 'g');


// italic for underscore /(\s|>)(_)(.*?)\2(\s|<)/
// `\\s{4}\\*(.*?)${newLine}`;
// const regex_italic_underscore = `/(\\s|>)(_)(.*?)\2(\\s|<)/`;
// const REGEXP_UNDERSCORE_ITALIC = RegExp(regex_italic_underscore, 'g');

const REGEXP_UNDERSCORE_ITALIC = /(\\s|>)(_)(.*?)\2(\\s|<)/g

// `\\s{4}\\*(.*?)${newLine}`;
// const regex_italic_asterix = `\*(?![*\\s])(?:[^*]*[^*\\s])?\*`;
// const REGEXP_ASTERIX_ITALIC = RegExp(regex_italic_asterix, 'g');
const REGEXP_ASTERIX_ITALIC = /(?![*\\s])(?:[^*]*[^*\\s])?/g

// const REGEXP_EM = /(\s|>)(\*|_)(.*?)\2(\s|<)/g;


export {
    REGEXP_SUB_LISTS,
    REGEXP_UNDERSCORE_ITALIC,
    REGEXP_ASTERIX_ITALIC,
}