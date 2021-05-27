const { REGEXP_STRONG } = require('atherdon-newsletter-constants');
const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');

const { PlainCallbacks, replaceMarkdown } = require("atherdon-callbacks");

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing strong', () => {
  it('renders strong', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_STRONG, PlainCallbacks.strong);

    const fileName = 'strong.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
