const { REGEXP_UL_LIST } = require('atherdon-newsletter-constants');

const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');
const { ulList } = require('../../../callbacks');
const { replaceMarkdown } = require('../../../helpers');

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

describe('testing complex-list', () => {
  it('renders complex-list', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_UL_LIST, ulList);

    const fileName = 'complex-list.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
