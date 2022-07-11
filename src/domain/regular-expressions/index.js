/* eslint-disable prefer-regex-literals */
//------------------
//-- additional new RegExes

import os from 'os';

const platform = os.platform();

const newLine = platform === 'win32' ? '\r\n' : '\n'; 
//---------------
const regex_variable = `\\s{4}\\*(.*?)${newLine}`;
const REGEXP_SUB_LISTS = new RegExp(regex_variable, 'g');


// const regex_italic = `\\s{4}\\*(.*?)${newLine}`;
// const REGEXP_ITALIC = RegExp(regex_italic, 'g');

export {
    REGEXP_SUB_LISTS
}