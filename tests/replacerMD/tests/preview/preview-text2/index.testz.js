const { REGEXP_PREVIEW_TEXT } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('@root/utils');
const { replaceMarkdownPreviewText } = require('@root/helpers');

const outFolder = 'src/tests/_generated';

const { 
  REGEXP_IMAGE, 
  write, 
  tests_getMarkdownFile, 
  // tests_getOutputFolder, 
  PlainCallbacks 
} = require('@domain/testing')

describe('testing preview-text', () => {
  it('renders preview-text', () => {
    const markdown = readSourceFile('src/tests/preview-text/content.md');
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
