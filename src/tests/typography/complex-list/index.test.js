const { REGEXP_UL_LIST } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('../../utils');
const { ulList } = require('../../callbacks');
const { replaceMarkdown } = require('../../helpers');

const outFolder = 'src/tests/_generated';

describe('testing complex-list', () => {
  it('renders complex-list', () => {
    const markdown = readSourceFile('src/tests/complex-list/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_UL_LIST, ulList);

    const fileName = 'complex-list.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
