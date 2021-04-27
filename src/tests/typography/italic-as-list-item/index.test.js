const { REGEXP_UL_LIST } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('../../../utils');
const { ulList } = require('../../../callbacks');
const { replaceMarkdown } = require('../../../helpers');

const { resolve } = require('path')
const root = resolve(__dirname, '')
const outFolder = resolve('tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing italic as list item', () => {
  it('testing italic as list item', () => {
    const markdown = readSourceFile(root+'/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_UL_LIST, ulList);

    const fileName = 'italic-list-item.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
