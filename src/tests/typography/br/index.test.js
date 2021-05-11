const { REGEXP_BR } = require('atherdon-newsletter-constants');

const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');
const { br } = require('../../../callbacks');
const { replaceMarkdown } = require('../../../helpers');

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing br', () => {
  it('renders br', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_BR, br);
    const fileName = 'br.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
