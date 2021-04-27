const { REGEXP_MEM } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('../../../utils');
const { mem } = require('../../../callbacks-simple');
const { replaceMarkdown } = require('../../../helpers');

const { resolve } = require('path')
const root = resolve(__dirname, '')
const outFolder = resolve('src/tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing mem', () => {
  it('renders mem', () => {
    const markdown = readSourceFile(root+'/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_MEM, mem);

    const fileName = 'memes.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
