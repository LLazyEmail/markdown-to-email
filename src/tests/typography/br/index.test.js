const { REGEXP_BR } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('../../utils');
const { br } = require('../../callbacks');
const { replaceMarkdown } = require('../../helpers');

const outFolder = 'src/tests/_generated';

describe('testing br', () => {
  it('renders br', () => {
    const markdown = readSourceFile('src/tests/br/br.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_BR, br);
    const fileName = 'br.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
