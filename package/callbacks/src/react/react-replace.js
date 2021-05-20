import {
newLine
} from '../helpers';

import {
  strong,
  link,
  blockquote,
  mem,
  header,
  italic,
  del,
  q,
  code,
  hr,
  empty,
  previewText,
  separator
} from './callbacks-simpleMDReact';

import {
  image,
  paragraphWrapper,
  sponsorship,
  br
} from './callbacksMDReact';

import {
  ulList,
  olList
} from './callbacks-lists-react';

import {
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
  REGEXP_HASH_TAG,
  REGEXP_LINK_HTTPS,
  REGEXP_LINK_G,
  REGEXP_STR_BEGIN,
  REGEXP_STR_END,
  REGEXP_SEPARATOR
} from 'atherdon-newsletter-constants';


const ReplacerMDReact = function () {};

ReplacerMDReact.prototype.replaceMDBinded = function () {};
ReplacerMDReact.prototype.replaceMDBindedPreviewText = function () {};

ReplacerMDReact.prototype.previewText = function () {
  this.replaceMDBinded(REGEXP_PREVIEW_TEXT, previewText);
};

ReplacerMDReact.prototype.comments = function () {
  this.replaceMDBinded(REGEXP_HTML_COMMENTS, empty);
};

ReplacerMDReact.prototype.strong = function () {
  this.replaceMDBinded(REGEXP_STRONG, strong);
};

ReplacerMDReact.prototype.italic = function () {
  this.replaceMDBinded(REGEXP_EM, italic);
};

ReplacerMDReact.prototype.header = function () {
  this.replaceMDBinded(REGEXP_HEADER, header);
};

ReplacerMDReact.prototype.image = function () {
  this.replaceMDBinded(REGEXP_IMAGE, image);
};

ReplacerMDReact.prototype.link = function () {
  this.replaceMDBinded(REGEXP_LINK, link);
};

ReplacerMDReact.prototype.del = function () {
  this.replaceMDBinded(REGEXP_DEL, del);
};

ReplacerMDReact.prototype.q = function () {
  this.replaceMDBinded(REGEXP_Q, q);
};

ReplacerMDReact.prototype.code = function () {
  this.replaceMDBinded(REGEXP_CODE, code);
};

ReplacerMDReact.prototype.ulList = function () {
  this.replaceMDBinded(REGEXP_UL_LIST, ulList);
};

ReplacerMDReact.prototype.olList = function () {
  this.replaceMDBinded(REGEXP_OL_LIST, olList);
};

ReplacerMDReact.prototype.blockQuote = function () {
  this.replaceMDBinded(REGEXP_BLOCKQUOTE, blockquote);
};

ReplacerMDReact.prototype.hr = function () {
  this.replaceMDBinded(REGEXP_HR, hr);
};
ReplacerMDReact.prototype.paragraph = function () {
  this.replaceMDBinded(REGEXP_PARAGRAPH, paragraphWrapper);
};

ReplacerMDReact.prototype.emptyUl = function () {
  this.replaceMDBinded(REGEXP_EMPTY_UL, empty);
};

ReplacerMDReact.prototype.emptyOl = function () {
  this.replaceMDBinded(REGEXP_EMPTY_OL, empty);
};

ReplacerMDReact.prototype.emptyBlockQuote = function () {
  this.replaceMDBinded(REGEXP_EMPTY_BLOCKQUOTE, newLine);
};

ReplacerMDReact.prototype.br = function () {
  this.replaceMDBinded(REGEXP_BR, br);
};

ReplacerMDReact.prototype.sponsorship = function () {
  this.replaceMDBinded(REGEXP_SPONSORSHIP, sponsorship);
};

ReplacerMDReact.prototype.mem = function () {
  this.replaceMDBinded(REGEXP_MEM, mem);
};

ReplacerMDReact.prototype.separator = function () {
  this.replaceMDBinded(REGEXP_SEPARATOR, separator);
};

export default new ReplacerMDReact();
