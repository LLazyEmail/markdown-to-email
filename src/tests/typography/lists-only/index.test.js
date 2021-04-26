const { REGEXP_UL_LIST } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('../../../utils');
const { ulList } = require('../../../callbacks');
const { replaceMarkdown } = require('../../../helpers');

const outFolder = 'src/tests/_generated';

describe('testing lists-only', () => {
  it('renders lists-only', () => {
    const markdown = readSourceFile('src/tests/lists-only/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_UL_LIST, ulList);

    const fileName = 'lists-only.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
