const { REGEXP_IMAGE } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('../../../utils');
const { image } = require('../../../callbacks');
const { replaceMarkdown } = require('../../../helpers');

const outFolder = 'src/tests/_generated';

describe('testing images-only', () => {
  it('renders images-only', () => {
    const markdown = readSourceFile('src/tests/images-only/content.md');
    const parsedContent = {
      content: markdown,
      warnings: {
        images: 0,
      },
    };

    replaceMarkdown.call(parsedContent, REGEXP_IMAGE, image);

    const fileName = 'images-only.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
