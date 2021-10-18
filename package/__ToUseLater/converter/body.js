// Using it as body


const {
  REGEXP_HEADER,
  REGEXP_SPONSORSHIP,
  REGEXP_HTML_COMMENTS,
  REGEXP_MEM,
  REGEXP_PREVIEW_TEXT,
} = require('atherdon-newsletter-constants');


import * as constants from 'atherdon-newsletter-constants';

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
    //     title: "xxx",
  },
  comments: {
    key: 'REGEXP_HTML_COMMENTS',
    value: empty,
    //     title: "xxx",
  },
  memes: {
    key: 'REGEXP_MEM',
    value: mem,
    //     title: "xxx",
  },
  previewText: {
    key: 'REGEXP_PREVIEW_TEXT',
    value: previewText,
    //     title: "xxx",
  },
  sponsor: {
    key: 'REGEXP_SPONSORSHIP',
    value: sponsorship,
    //     title: "xxx",
  },
};

export default Template
