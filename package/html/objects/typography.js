

// https://github.com/atherdon/markdown-regex/blob/main/src/index.js

const Typography = {

  strong: {
    key: 'REGEXP_STRONG',
    value: strong,
  },
  italic: {
    key: 'REGEXP_EM',
    value: italic,
  },

  image: {
    key: 'REGEXP_IMAGE',
    value: image,
  },
  
  link: {
    key: 'REGEXP_LINK',
    value: link,
  },

  del: {
    key: 'REGEXP_DEL',
    value: del,
  },

  q: {
    key: 'REGEXP_Q',
    value: q,

  },
  code: {
    key: 'REGEXP_CODE',
    value: code,

  },

  ulList: {
    key: 'REGEXP_UL_LIST',
    value: ulList,
  },
  olList: {
    key: 'REGEXP_OL_LIST',
    value: olList,
  },

  blockquote: {
    key: 'REGEXP_BLOCKQUOTE',
    value: blockquote,
  },

  hr: {
    key: 'REGEXP_HR',
    value: hr,    
  },


  paragraph: {
    key: 'REGEXP_PARAGRAPH',
    value: paragraphWrapper,
  },

  emptyUL: {
    key: 'REGEXP_EMPTY_UL',
    value: empty,
  },
  emptyOL: {
    key: 'REGEXP_EMPTY_OL',
    value: empty,
  },
};

export default Typography;
