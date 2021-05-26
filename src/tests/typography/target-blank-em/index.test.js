const { REGEXP_EM, REGEXP_LINK } = require('atherdon-newsletter-constants');
const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');
// const { italic, link } = require('@root/callbacks-simple');
const { replaceMarkdown } = require('@root/helpers');

const { PlainCallbacks } = require("atherdon-callbacks");

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing target-blank-em', () => {
  it('renders target-blank-em', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };
    replaceMarkdown.call(parsedContent, REGEXP_EM, PlainCallbacks.italic);

    const fileName = 'target-blank-em.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });

  it('renders italic with link', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };
    replaceMarkdown.call(parsedContent, REGEXP_LINK, PlainCallbacks.link);
    const fileName = 'links.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
