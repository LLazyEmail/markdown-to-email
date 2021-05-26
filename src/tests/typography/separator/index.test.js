const { REGEXP_SEPARATOR } = require('atherdon-newsletter-constants');
const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');
// const { separator } = require('@root/callbacks-custom');
// const { replaceMarkdown } = require('@root/helpers');

const { PlainCallbacks } = require("atherdon-callbacks");
const { replaceMarkdown } = require("atherdon-callbacks");

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

describe('testing separator', () => {
  it('renders separator', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_SEPARATOR, PlainCallbacks.separator);
    const fileName = 'separator.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
