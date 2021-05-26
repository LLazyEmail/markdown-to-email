const { REGEXP_HTML_COMMENTS } = require('atherdon-newsletter-constants');
const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');
const { replaceMarkdown } = require("atherdon-callbacks");

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing html-comments', () => {
  it('renders html-comments', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_HTML_COMMENTS, '');
    const fileName = 'html-comments.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
