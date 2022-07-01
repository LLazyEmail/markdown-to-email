const { writeReactComponent, readSourceFile } = require('@root/utils');
const { replaceMarkdown } = require('@root/helpers');
const { previewText } = require('../../../callbacks-simpleMDReact');
const { REGEXP_PREVIEW_TEXT } = require('../../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

const { 
  REGEXP_PREVIEW_TEXT, 
  write, 
  tests_getMarkdownFile, 
  // tests_getOutputFolder, 
  PlainCallbacks 
} = require('@domain/testing')

describe('testing preview-text', () => {
  it('renders preview-text', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/preview/preview-text/content.md');
    const parsedContent = {
      content: markdown,
      errors: {
        previewText: false,
      },
    };

    replaceMarkdown.call(parsedContent, REGEXP_PREVIEW_TEXT, previewText);
    const fileName = 'Preview1.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
