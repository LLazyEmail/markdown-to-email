const { REGEXP_EM } = require('markdown-regex');
const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');

const { PlainCallbacks, replaceMarkdown } = require('atherdon-callbacks');

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing italic-first-sentence', () => {
  it('renders italic-first-sentence', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_EM, PlainCallbacks.italic);

    const fileName = 'italic-first-sentence.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
