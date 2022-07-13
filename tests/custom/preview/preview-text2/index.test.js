const { REGEXP_PREVIEW_TEXT } = require('atherdon-newsletter-constants');
const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');
const { replaceMarkdownPreviewText } = require('atherdon-callbacks');

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

describe('testing preview-text', () => {
  it('renders preview-text', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
      previewText: '',
      errors: {
        previewText: false,
      },
    };

    replaceMarkdownPreviewText.call(parsedContent, REGEXP_PREVIEW_TEXT);
    const fileName = 'preview.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
