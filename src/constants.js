// @todo yeah yeah yeah
// I know that everything is bad about this file.
// please change that, I'll be very happy about it.

// @todo expand this thing
// .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
// .replace(/\*(.*)\*/gim, '<i>$1</i>')
// .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
// .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
// .replace(/\n$/gim, '<br />')

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

// this.rules = [
//   {
//     regex: REGEX_HEADLINE, replacement: header
//   },
// ]

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
// const REGEXP_BR = /\n$/gim;

// //2nd batch, related to custom markdown tags
// const REGEXP_CUSTOM_LINK = /\[(.*?)\]\((.*?)\)/g;
// const REGEXP_CUSTOM_MEME_IMAGE = /\((.*?)\)/g; // @TODO or use gim as for other cases that we have?
// // const REGEXP_CUSTOM_

const REGEXP_HEADER = /(#+)(.*)/g;
const REGEXP_IMAGE = /!\[([^\[]+)\]\(([^\)]+)\)/g;
const REGEXP_LINK = /\[([^\[]+)\]\(([^\)]+)\)/g;
const REGEXP_STRONG = /(\*\*|__)(.*?)(\*?)\1/g;
const REGEXP_DEL = /\~\~(.*?)\~\~/g;
const REGEXP_Q = /\:\"(.*?)\"\:/g;
const REGEXP_CODE = /`(.*?)`/g;

const REGEXP_UL_LIST = /\n(((\s{4})?\*(.*?)\n){1,})/g;
const REGEXP_OL_LIST = /\n[0-9]+\.(.*)/g;

const REGEXP_BLOCKQUOTE = /\n(&gt;|\>)(.*)/g;
const REGEXP_HR = /\n-{5,}/g;

const REGEXP_PARAGRAPH = /\n([^\n]+)\n/g;

const REGEXP_EMPTY_UL = /<\/ul>\s?<ul>/g;
const REGEXP_EMPTY_OL = /<\/ol>\s?<ol>/g;
const REGEXP_BR = /(\n{2,})/g;
const REGEXP_EMPTY_BLOCKQUOTE = /<\/blockquote><blockquote>/g;
const REGEXP_EM = /(\s|>)(\*|_)(.*?)\2(\s|<)/g;

const REGEXP_SPONSORSHIP = /~(\[(.*?)\]){3}/g;
const REGEXP_HTML_COMMENTS = /<!--(([\r\n]|.)*?)-->/g;

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
  REGEXP_HTML_COMMENTS
};
