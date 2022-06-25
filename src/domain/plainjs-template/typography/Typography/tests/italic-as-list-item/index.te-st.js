const { REGEXP_UL_LIST } = require('markdown-regex');
const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');

const { PlainCallbacks, replaceMarkdown } = require('atherdon-callbacks');

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing italic as list item', () => {
  it('testing italic as list item', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_UL_LIST, PlainCallbacks.ulList);

    const fileName = 'italic-list-item.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
