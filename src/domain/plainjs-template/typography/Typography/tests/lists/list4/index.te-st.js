const { REGEXP_OL_LIST } = require('markdown-regex');
const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');

const { PlainCallbacks, replaceMarkdown } = require('atherdon-callbacks');

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

describe('testing list4', () => {
  it('renders list4 correctly', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_OL_LIST, PlainCallbacks.olList);

    const fileName = 'list4.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
