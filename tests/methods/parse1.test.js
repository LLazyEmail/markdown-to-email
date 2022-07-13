const { resolve } = require('path');

const {
  REGEXP_HTML_COMMENTS,
  REGEXP_PREVIEW_TEXT,
} = require('atherdon-newsletter-constants');

const {
  PlainCallbacks,
  replaceMarkdown,
  replaceMarkdownPreviewText,
} = require('atherdon-callbacks');
const { readSourceFile, FULL_SOURCE } = require('../../utils');

// @TODO looks like the same thing for me
const markdown = readSourceFile(FULL_SOURCE);

const staticMarkdown = readSourceFile(FULL_SOURCE);

// @TODO finish this line later
const root = resolve(__dirname, '');
const htmlTeamplate = resolve(
  `${__dirname}/source_full_code_test/test.html`,
  '',
);

const staticState = {
  content: staticMarkdown,
  previewText: '',
  warnings: {
    images: 0,
  },
  errors: {
    previewText: false,
    sponsorshipTop: false,
    sponsorshipBottom: false,
  },
};

const state = {
  content: markdown,
  previewText: '',
  warnings: {
    images: 0,
  },
  errors: {
    previewText: false,
    sponsorshipTop: false,
    sponsorshipBottom: false,
  },
};

const replaceMDBinded = replaceMarkdown.bind(state);
const replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);

// iterating throught the objects

function iterator(obj) {
  const arr = [];
  Object.entries(obj).forEach((item) => {
    arr.push(item);
  });
  return arr;
}

// describe tests

describe('tests for all functionality', () => {
  // replaceMDBindedPreviewText(REGEXP_PREVIEW_TEXT) tests
  test('checking preview text functionality ', () => {
    let check = false;

    replaceMDBindedPreviewText(REGEXP_PREVIEW_TEXT);

    if (REGEXP_PREVIEW_TEXT.length !== 0) {
      check = true;
    }

    if (staticState.content.length !== state.content.length) {
      check = true;
    } else {
      check = false;
    }

    if (iterator(state) !== iterator(staticState)) {
      check = true;
    }

    expect(check).toBe(true);
  });

  test('function replaceMDBinded will return text without comments ', () => {
    let check = false;
    const markdown = readSourceFile(htmlTeamplate);

    const state = {
      content: markdown,
      previewText: '',
      warnings: {
        images: 0,
      },
      errors: {
        previewText: false,
        sponsorshipTop: false,
        sponsorshipBottom: false,
      },
    };

    replaceMDBinded(REGEXP_HTML_COMMENTS, PlainCallbacks.empty);

    if (state.content !== this.markdown) {
      check = true;
    } else {
      check = false;
    }

    expect(check).toBe(true);
  });
});
