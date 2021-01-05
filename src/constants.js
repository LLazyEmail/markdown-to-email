// @todo or expand this thing
// this.rules =  [
//   {regex: /(#+)(.*)/g, replacement: header},                                         // headers
//   {regex: /!\[([^\[]+)\]\(([^\)]+)\)/g, replacement: '<img src=\'$2\' alt=\'$1\'>'}, // image
//   {regex: /\[([^\[]+)\]\(([^\)]+)\)/g, replacement: '<a href=\'$2\'>$1</a>'},        // hyperlink
//   {regex: /(\*\*|__)(.*?)\1/g, replacement: '<strong>$2</strong>'},                  // bold
//   {regex: /(\*|_)(.*?)\1/g, replacement: '<em>$2</em>'},                             // emphasis
//   {regex: /\~\~(.*?)\~\~/g, replacement: '<del>$1</del>'},                           // del
//   {regex: /\:\"(.*?)\"\:/g, replacement: '<q>$1</q>'},                               // quote
//   {regex: /`(.*?)`/g, replacement: '<code>$1</code>'},                               // inline code
//   {regex: /\n\*(.*)/g, replacement: ulList},                                         // ul lists
//   {regex: /\n[0-9]+\.(.*)/g, replacement: olList},                                   // ol lists
//   {regex: /\n(&gt;|\>)(.*)/g, replacement: blockquote},                              // blockquotes
//   {regex: /\n-{5,}/g, replacement: '\n<hr />'},                                      // horizontal rule
//   {regex: /\n([^\n]+)\n/g, replacement: para},                                       // add paragraphs
//   {regex: /<\/ul>\s?<ul>/g, replacement: ''},                                        // fix extra ul
//   {regex: /<\/ol>\s?<ol>/g, replacement: ''},                                        // fix extra ol
//   {regex: /<\/blockquote><blockquote>/g, replacement: '\n'}                          // fix extra blockquote
// ];

/// @TODO add const for newsletter_sponsor_link
// for hackernoon_logo_path
// for HN socials, with images and shit

// const REGEXP_H3 = /^### (.*$)/gim;
// const REGEXP_H2 = /^## (.*$)/gim;
// const REGEXP_H1 = /^# (.*$)/gim;
// const REGEXP_BLOCKQUOTE = /^\> (.*$)/gim;
// const REGEXP_B = /\*\*(.*)\*\*/gim;
// const REGEXP_I = /\*(.*)\*/gim;
// const REGEXP_IMG = /!\[(.*?)\]\((.*?)\)/gim;
// const REGEXP_A = /\[(.*?)\]\((.*?)\)/gim;

const {newLine} = require('./utils');

const REGEXP_HASH_TAG = new RegExp("#[~##\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]", 'g');
const REGEXP_LINK_G = new RegExp("Link:", "g");

const REGEXP_LINK_HTTPS = new RegExp(">https", "g");

const REGEXP_STR_BEGIN = ">https";
const REGEXP_STR_END = "f<";
    
const REGEXP_HEADER = new RegExp(`${newLine}(#+)(.*)`, 'g');

const REGEXP_IMAGE = /!\[([^\[]+)\]\(([^\)]+)\)/g;
const REGEXP_LINK = /\[([^\[]+)\]\(([^\)]+)\)/g;
const REGEXP_STRONG = /(\*\*|__)(.*?)(\*?)\1/g;
const REGEXP_DEL = /\~\~(.*?)\~\~/g;
const REGEXP_Q = /\:\"(.*?)\"\:/g;
const REGEXP_CODE = /`(.*?)`/g;

const REGEXP_UL_LIST = new RegExp(`${newLine}(((\\s{4})?\\*(.*?)${newLine}){1,})`, 'g');
const REGEXP_OL_LIST = new RegExp(`${newLine}[0-9]+\\.(.*)`, 'g'); 

const REGEXP_BLOCKQUOTE = new RegExp(`${newLine}(&gt;|\\>)(.*)`, 'g');
const REGEXP_HR = new RegExp(`${newLine}-{5,}`,'g');

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


module.exports = {
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
  REGEXP_STR_END
};
