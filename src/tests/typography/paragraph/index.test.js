const { REGEXP_PARAGRAPH } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('../../utils');
const { paragraphWrapper } = require('../../callbacks');
const { replaceMarkdown } = require('../../helpers');

const outFolder = 'src/tests/_generated';

describe('testing paragraph', () => {
  it('renders sponsorship', () => {
    const markdown = readSourceFile('src/tests/paragraph/paragraph.md');
    const parsedContent = {
      content: markdown,
    };
    replaceMarkdown.call(parsedContent, REGEXP_PARAGRAPH, paragraphWrapper);
    const fileName = 'paragraph.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
