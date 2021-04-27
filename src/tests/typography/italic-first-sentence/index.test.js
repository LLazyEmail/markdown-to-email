const { REGEXP_EM } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('../../../utils');
const { italic } = require('../../../callbacks-simple');
const { replaceMarkdown } = require('../../../helpers');

const { resolve } = require('path')
const root = resolve(__dirname, '')
const outFolder = resolve('tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing italic-first-sentence', () => {
  it('renders italic-first-sentence', () => {
    const markdown = readSourceFile(root+'/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_EM, italic);

    const fileName = 'italic-first-sentence.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
