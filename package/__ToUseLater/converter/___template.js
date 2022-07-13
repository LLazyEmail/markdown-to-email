const {
  REGEXP_HEADER,
  REGEXP_SPONSORSHIP,
  REGEXP_HTML_COMMENTS,
  REGEXP_PREVIEW_TEXT,
} = require('atherdon-newsletter-constants');

const { header, sponsorship } = require('../callbacks');

// const layouts = require("atherdon-newsletter-constants");

const ConverterBody = {
  header: {
    key: 'REGEXP_HEADER',
    value: header,
    //     title: "xxx",
  },
  comments: {
    key: 'REGEXP_HTML_COMMENTS',
    //     value: 1,
    //     title: "xxx",
  },
  previewText: {
    key: 'REGEXP_PREVIEW_TEXT',
    //     value: 1,
    //     title: "xxx",
  },
  sponsor: {
    key: 'REGEXP_SPONSORSHIP',
    value: sponsorship,
    //     title: "xxx",
  },
};

module.exports = ConverterBody;
