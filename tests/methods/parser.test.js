const {
  //   REGEXP_HEADER,
  //   REGEXP_IMAGE,
  //   REGEXP_LINK,
  //   REGEXP_STRONG,
  //   REGEXP_DEL,
  //   REGEXP_Q,
  //   REGEXP_CODE,
  //   REGEXP_UL_LIST,
  //   REGEXP_OL_LIST,
  //   REGEXP_BLOCKQUOTE,
  //   REGEXP_HR,
  //   REGEXP_PARAGRAPH,
  //   REGEXP_EMPTY_UL,
  //   REGEXP_EMPTY_OL,
  //   REGEXP_BR,
  //   REGEXP_EMPTY_BLOCKQUOTE,
  //   REGEXP_EM,
  //   REGEXP_SPONSORSHIP,
  //   REGEXP_HTML_COMMENTS,
  //   REGEXP_MEM,
  //   REGEXP_PREVIEW_TEXT,
} = require('atherdon-newsletter-constants');

const {
  PlainCallbacks,
  replaceMarkdown,
  newLine,
} = require('atherdon-callbacks');
const { readSourceFile, FULL_SOURCE } = require('../../utils');

const {
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

  image,
  ulList,
  olList,
  paragraphWrapper,
  sponsorship,
  br,
} = PlainCallbacks;

const { parse } = require('../../parse');

// const FULL_SOURCE = 'source/source-full.md';

describe('tests for all functionality', () => {
  test('function parse', () => {
    const { previewText, content, errors, warnings } = parse(FULL_SOURCE);

    let check = false;

    if (previewText !== ' ' || content !== ' ') {
      check = true;
    } else {
      check = false;
    }

    if (
      errors.previewText &&
      errors.sponsorshipBottom &&
      errors.sponsorshipTop === true
    ) {
      check = true;
    } else {
      check = false;
    }
    // this will be false, because source.md doesn't have previewText
    expect(check).toBe(false);
  });
});
