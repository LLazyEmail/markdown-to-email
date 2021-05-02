const {
  REGEXP_HEADER,

  REGEXP_SPONSORSHIP,
  REGEXP_HTML_COMMENTS,
  REGEXP_MEM,
  REGEXP_PREVIEW_TEXT,
} = require('atherdon-newsletter-constants');
const {
  header,
  sponsorship,
  mem,
} = require('../callbacks');

// const layouts = require("atherdon-newsletter-constants");

const ConverterBody = {
  headline: {
    //     key: "REGEXP_xxx",
    //     value: 1,
    //     title: "xxx",
  },
  logoBottom: {
    //     key: "REGEXP_xxx",
    //     value: 1,
    //     title: "xxx",
  },
  logoTop: {
    //     key: "REGEXP_xxx",
    //     value: 1,
    //     title: "xxx",
  },
  previewText: {
    key: 'REGEXP_PREVIEW_TEXT',
    //     value: 1,
    //     title: "xxx",
  },
  section: {
    //     key: "REGEXP_xxx",
    //     value: 1,
    //     title: "xxx",
  },
  sponsor: {
    key: 'REGEXP_SPONSORSHIP',
    //     value: 1,
    //     title: "xxx",
  },
};

// export data
