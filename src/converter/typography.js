const {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_DEL,
  REGEXP_Q,

  REGEXP_PARAGRAPH,

  REGEXP_UL_LIST,
  REGEXP_OL_LIST,

  REGEXP_EM,

  REGEXP_HTML_COMMENTS,
  REGEXP_MEM,
} = require('atherdon-newsletter-constants');
const {
  header,
  image,
  link,
  ulList,
  olList,

  paragraphWrapper,
  br,
  strong,
  mem,
  italic,
  del,
  q,
  code,
} = require('../callbacks');

// const layouts = require("atherdon-newsletter-constants");
// const {  } = require("atherdon-newsletter-constants");

const ConverterTypography = {
  heading: {
    key: 'REGEXP_HEADER',
    value: header,
    //     title: "xxx",
  },
  image: {
    key: 'REGEXP_IMAGE',
    value: image,
    //     title: "xxx",
  },
  italic: {
    key: 'REGEXP_EM',
    //     value: 1,
    //     title: "xxx",
  },
  link: {
    key: 'REGEXP_LINK',
    value: link,
    //     title: "xxx",
  },
  
  ulList: {
    key: 'REGEXP_UL_LIST',
    value: ulList,
    //     title: "xxx",
  },
  olList: {
    key: 'REGEXP_OL_LIST',
    value: olList,
    //     title: "xxx",
  },
  listItem: {
    key: 'REGEXP_H3',
    //     value: 1,
    //     title: "xxx",
  },
  mainTitle: {
    key: 'REGEXP_HEADER',
    //     value: 1,
    //     title: "xxx",
  },
  paragraph: {
    key: 'REGEXP_PARAGRAPH',
    value: paragraphWrapper,
    //     title: "xxx",
  },
  strong: {
    key: 'REGEXP_STRONG',
    value: strong,
    //     title: "xxx",
  },
  subtitle: {
    key: 'REGEXP_H2',
    //     value: 1,
    //     title: "xxx",
  },
};

export default ConverterTypography;
