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
} = require("../callbacks");

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
} = require("atherdon-newsletter-constants");

//const layouts = require("atherdon-newsletter-constants");


const ConverterTypography = {
     heading: {
//     key: "REGEXP_H3",
//     value: 1,
//     title: "xxx",
   },
       image: {
//     key: "REGEXP_H3",
//     value: 1,
//     title: "xxx",
   },
       italic: {
//     key: "REGEXP_H3",
//     value: 1,
//     title: "xxx",
   },
       link: {
//     key: "REGEXP_H3",
//     value: 1,
//     title: "xxx",
   },
       list: {
//     key: "REGEXP_H3",
//     value: 1,
//     title: "xxx",
   },
       listItem: {
//     key: "REGEXP_H3",
//     value: 1,
//     title: "xxx",
   },
       mainTitle: {
//     key: "REGEXP_H3",
//     value: 1,
//     title: "xxx",
   },
       paragraph: {
//     key: "REGEXP_H3",
//     value: 1,
//     title: "xxx",
   },
       strong: {
//     key: "REGEXP_H3",
//     value: 1,
//     title: "xxx",
   },
       subtitle: {
//     key: "REGEXP_H3",
//     value: 1,
//     title: "xxx",
   }
};

// export data
