const { REGEXP_PARAGRAPH } = require('atherdon-newsletter-constants');
const { resolve } = require('path');
const { write, readSourceFile } = require('../../../utils');
const { paragraphWrapper } = require('../../../callbacks');
const { replaceMarkdown } = require('../../../helpers');

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing paragraph', () => {
  it('renders sponsorship', () => {
    const markdown = readSourceFile(`${root}/paragraph.md`);
    const parsedContent = {
      content: markdown,
    };
    replaceMarkdown.call(parsedContent, REGEXP_PARAGRAPH, paragraphWrapper);
    const fileName = 'paragraph.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
