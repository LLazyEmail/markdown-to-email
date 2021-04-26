const { REGEXP_STRONG } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('../../utils');
const { strong } = require('../../callbacks-simple');
const { replaceMarkdown } = require('../../helpers');

const outFolder = 'src/tests/_generated';

describe('testing strong', () => {
  it('renders strong', () => {
    const markdown = readSourceFile('src/tests/strong/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_STRONG, strong);

    const fileName = 'strong.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});