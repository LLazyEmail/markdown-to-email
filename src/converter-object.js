const {
  header,
  image,
  link,
  ulList,
  olList,
  blockquote,
  paragraphWrapper,
  sponsorship,
  br,
  strong,
  mem,
  italic, 
  del,
  q,
  code,
  hr,
  empty,
  newLine
} = require("./callbacks");

const {
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
} = require("./constants");

//const layouts = require("atherdon-newsletter-constants");

// const Converter = {
//   REGEXP_H3: {
//     key: "REGEXP_H3",
//     value: 1,
//     title: "xxx",
//   },
//   REGEXP_H2: {
//     key: "REGEXP_H2",
//     value: 2,
//     title: "xxx",
//   },
//   REGEXP_H1: {
//     key: "REGEXP_H1",
//     value: 3,
//     title: "xxx",
//   },
//   REGEXP_BLOCKQUOTE: {
//     key: "REGEXP_BLOCKQUOTE",
//     value: 4,
//     title: "xxx",
//   },
//   REGEXP_B: {
//     key: "REGEXP_B",
//     value: 5,
//     title: "xxx",
//   },
//   REGEXP_I: {
//     key: "REGEXP_I",
//     value: 6,
//     title: "xxx",
//   },
//   REGEXP_IMG: {
//     key: "REGEXP_H3",
//     value: 7,
//     title: "xxx",
//   },
//   REGEXP_A: {
//     key: "REGEXP_A",
//     value: 8,
//     title: "xxx",
//   },
//   REGEXP_BR: {
//     key: "REGEXP_BR",
//     value: 9,
//     title: "xxx",
//   },
// };

// example Converter.REGEXP_BR

// how to make a loop?
// Object.keys(Converter).map(key => {
//   console.log(Converter[key])
// })
