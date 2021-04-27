const { REGEXP_HTML_COMMENTS } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('../../../utils');
const { replaceMarkdown } = require('../../../helpers');

const { resolve } = require('path')
const root = resolve(__dirname, '')
const outFolder = resolve('tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing html-comments', () => {
  it('renders html-comments', () => {
    const markdown = readSourceFile(root + '/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_HTML_COMMENTS, '');
    const fileName = 'html-comments.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
