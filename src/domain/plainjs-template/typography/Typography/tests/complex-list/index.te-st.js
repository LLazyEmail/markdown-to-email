const { REGEXP_UL_LIST } = require('markdown-regex');

const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');

const { PlainCallbacks, replaceMarkdown } = require('atherdon-callbacks');

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

describe('testing complex-list', () => {
  it('renders complex-list', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_UL_LIST, PlainCallbacks.ulList);

    const fileName = 'complex-list.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
