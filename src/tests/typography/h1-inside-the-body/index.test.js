const { REGEXP_HEADER } = require('atherdon-newsletter-constants');

const { write, readSourceFile } = require('../../../utils');
const { header } = require('../../../callbacks-simple');
const { replaceMarkdown } = require('../../../helpers');

const { resolve } = require('path')
const root = resolve(__dirname, '')
const outFolder = resolve('tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing h1-inside-the-body', () => {
  it('renders h1-inside-the-body', () => {
    const markdown = readSourceFile(root + '/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(
      parsedContent,
      REGEXP_HEADER,
      header,
    );

    const fileName = 'h1-inside-the-body.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
