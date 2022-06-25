const { REGEXP_LINK } = require('markdown-regex');
const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');

const { PlainCallbacks, replaceMarkdown } = require('atherdon-callbacks');

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing links when space before link', () => {
  it('renders testing links when space before link', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_LINK, PlainCallbacks.link);

    const fileName = 'links-empty-space.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
