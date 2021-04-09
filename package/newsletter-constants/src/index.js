import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

const REGEXP_HASH_TAG = new RegExp(
  "#[~##\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]",
  "g"
);
const REGEXP_LINK_G = new RegExp("Link:", "g");

const REGEXP_LINK_HTTPS = new RegExp(">https", "g");

const REGEXP_STR_BEGIN = ">https";
const REGEXP_STR_END = "f<";

const REGEXP_HEADER = new RegExp(`${newLine}(#+)(.*)`, "g");

const REGEXP_IMAGE = /!\[([^\[]+)\]\(([^\)]+)\)/g;
const REGEXP_LINK = /\[([^\[]+)\]\(([^\)]+)\)/g;
const REGEXP_STRONG = /(\*\*|__)(.*?)(\*?)\1/g;
const REGEXP_DEL = /\~\~(.*?)\~\~/g;
const REGEXP_Q = /\:\"(.*?)\"\:/g;
const REGEXP_CODE = /`(.*?)`/g;

const REGEXP_UL_LIST = new RegExp(
  `${newLine}(((\\s{4})?\\*(.*?)${newLine}){1,})`,
  "g"
);
const REGEXP_OL_LIST = new RegExp(`${newLine}[0-9]+\\.(.*)`, "g");

const REGEXP_BLOCKQUOTE = new RegExp(`${newLine}(&gt;|\\>)(.*)`, "g");
const REGEXP_HR = new RegExp(`${newLine}-{5,}`, "g");

const REGEXP_PARAGRAPH = new RegExp(`${newLine}(.+?)${newLine}`, "g");

const REGEXP_EMPTY_UL = /<\/ul>\s?<ul>/g;
const REGEXP_EMPTY_OL = /<\/ol>\s?<ol>/g;
const REGEXP_BR = new RegExp(`((${newLine}){2,})`, "g");
const REGEXP_EMPTY_BLOCKQUOTE = /<\/blockquote><blockquote>/g;
const REGEXP_EM = /(\s|>)(\*|_)(.*?)\2(\s|<)/g;

const REGEXP_SPONSORSHIP = /~(\[(.*?)\]){3}/g;
const REGEXP_HTML_COMMENTS = /<!--(([\r\n]|.)*?)-->/g;
const REGEXP_MEM = /\!\[(.*?)\]\[(.*?)\]\[(.*?)\]/g;
const REGEXP_PREVIEW_TEXT = new RegExp(`#~(.*?)${newLine}`);
// const REGEXP_H3 = /^### (.*$)/gim;
// const REGEXP_H2 = /^## (.*$)/gim;

export const html_tags = {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_DEL,
  REGEXP_Q,
  REGEXP_CODE,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_PARAGRAPH,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
  REGEXP_BR,
  REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_EM,
  REGEXP_SPONSORSHIP,
  REGEXP_HTML_COMMENTS,
  REGEXP_MEM,
  REGEXP_PREVIEW_TEXT,
  REGEXP_HASH_TAG,
  REGEXP_LINK_HTTPS,
  REGEXP_LINK_G,
  REGEXP_STR_BEGIN,
  REGEXP_STR_END,
};
