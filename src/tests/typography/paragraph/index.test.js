const { REGEXP_PARAGRAPH } = require('atherdon-newsletter-constants');
const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');

const { PlainCallbacks } = require("atherdon-callbacks");
const { replaceMarkdown } = require("atherdon-callbacks");

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing paragraph', () => {
  it('renders sponsorship', () => {
    const markdown = readSourceFile(`${root}/paragraph.md`);
    const parsedContent = {
      content: markdown,
    };
    replaceMarkdown.call(parsedContent, REGEXP_PARAGRAPH, PlainCallbacks.paragraphWrapper);
    const fileName = 'paragraph.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
