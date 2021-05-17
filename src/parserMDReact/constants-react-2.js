const os = require('os');

const platform = os.platform();

const newLine = platform === 'win32' ? '\r\n' : '\n';



const REGEXP_UL_LIST = new RegExp(
  `${newLine}(((\\s{4})?\\*(.*?)${newLine}){1,})`,
  'g',
);
const REGEXP_OL_LIST = new RegExp(`${newLine}[0-9]+\\.(.*)`, 'g');


const REGEXP_EMPTY_UL = /<\/ul>\s?<ul>/g;
const REGEXP_EMPTY_OL = /<\/ol>\s?<ol>/g;


module.exports = {
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,

  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL
};
