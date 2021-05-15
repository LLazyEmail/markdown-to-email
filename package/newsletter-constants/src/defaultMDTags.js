import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

const REGEXP_HEADER = new RegExp(`${newLine}(#+)(.*)`, "g");

const REGEXP_IMAGE = /!\[([^\[]+)\]\(([^\)]+)\)/g;
// TODO ADD REF PARAMETER TO URL
const REGEXP_LINK = /\[([^\[]+)\]\(([^\)]+)\)/g;
const REGEXP_STRONG = /(\*\*|__)(.*?)(\*?)\1/g;
const REGEXP_DEL = /\~\~(.*?)\~\~/g;
const REGEXP_Q = /\:\"(.*?)\"\:/g;
const REGEXP_CODE = /`(.*?)`/g;





const REGEXP_BLOCKQUOTE = new RegExp(`${newLine}(&gt;|\\>)(.*)`, "g");
const REGEXP_HR = new RegExp(`${newLine}-{5,}`, "g");

const REGEXP_PARAGRAPH = new RegExp(`${newLine}(.+?)${newLine}`, "g");




const REGEXP_BR = new RegExp(`((${newLine}){2,})`, "g");

const REGEXP_EMPTY_BLOCKQUOTE = /<\/blockquote><blockquote>/g;

const REGEXP_EM = /(\s|>)(\*|_)(.*?)\2(\s|<)/g;

export {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_DEL,
  REGEXP_Q,
  REGEXP_CODE,

  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_PARAGRAPH,

  REGEXP_BR,
  REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_EM,
};
