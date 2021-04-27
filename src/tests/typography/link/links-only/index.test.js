const { REGEXP_LINK } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('../../../../utils');
const { link } = require('../../../../callbacks-simple');
const { replaceMarkdown } = require('../../../../helpers');

const { resolve } = require('path')
const root = resolve(__dirname, '')
const outFolder = resolve('src/tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing links-only', () => {
  it('renders links-only', () => {
    const markdown = readSourceFile(root + '/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_LINK, link);

    const fileName = 'links-only.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
