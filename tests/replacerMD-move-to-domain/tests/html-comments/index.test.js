const { writeReactComponent, readSourceFile } = require('@root/utils');
const { replaceMarkdown } = require('@root/helpers');

const { empty } = require('../../callbacks-simpleMDReact');

const { REGEXP_HTML_COMMENTS } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

const {
  REGEXP_HTML_COMMENTS,
  write,
  tests_getMarkdownFile,
  // tests_getOutputFolder,
  PlainCallbacks,
} = require('@domain/testing');

describe('testing html-comments', () => {
  it('renders html-comments', () => {
    const markdown = readSourceFile(
      'src/parserMDReact/tests/html-comments/content.md',
    );

    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_HTML_COMMENTS, empty);

    const fileName = 'Html.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
