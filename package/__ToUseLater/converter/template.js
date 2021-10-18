// const {
//   REGEXP_HEADER,
//   REGEXP_SPONSORSHIP,
//   REGEXP_HTML_COMMENTS,
//   REGEXP_MEM,
//   REGEXP_PREVIEW_TEXT,
// } = require('atherdon-newsletter-constants');


// import * as constants from 'atherdon-newsletter-constants';


// https://github.com/atherdon/markdown-regex/blob/main/src/index.js

import { 
  PlainCallbacks
} from 'atherdon-callbacks';

const { 
  header,
  sponsorship,
  mem,
  previewText,
  empty 
} = PlainCallbacks;

// const layouts = require("atherdon-newsletter-constants");

const Template = {
  header: {
    key: 'REGEXP_HEADER',
    value: header,
  },
  comments: {
    key: 'REGEXP_HTML_COMMENTS',
    value: empty,
  },
  memes: {
    key: 'REGEXP_MEM',
    value: mem,
  },
  previewText: {
    key: 'REGEXP_PREVIEW_TEXT',
    value: previewText,
  },
  sponsor: {
    key: 'REGEXP_SPONSORSHIP',
    value: sponsorship,
  },
};

export default Template
