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
  code
 
} = require("../callbacks");

//const layouts = require("atherdon-newsletter-constants");

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
  REGEXP_MEM
} = require("atherdon-newsletter-constants");




const ConverterTypography = {
   heading: {
     key: "REGEXP_xxxx",
//     value: 1,
//     title: "xxx",
   },
   image: {
     key: "REGEXP_IMAGE",
//     value: 1,
//     title: "xxx",
   },
   italic: {
     key: "REGEXP_EM",
//     value: 1,
//     title: "xxx",
   },
   link: {
     key: "REGEXP_LINK",
//     value: 1,
//     title: "xxx",
   },
   list: {
     key: "REGEXP_UL_LIST",
//     value: 1,
//     title: "xxx",
   },
   listItem: {
     key: "REGEXP_H3",
//     value: 1,
//     title: "xxx",
   },
   mainTitle: {
     key: "REGEXP_HEADER",
//     value: 1,
//     title: "xxx",
   },
    paragraph: {
     key: "REGEXP_PARAGRAPH",
//     value: 1,
//     title: "xxx",
   },
   strong: {
     key: "REGEXP_STRONG",
//     value: 1,
//     title: "xxx",
   },
    subtitle: {
     key: "REGEXP_H2",
//     value: 1,
//     title: "xxx",
   }
};

// export data
