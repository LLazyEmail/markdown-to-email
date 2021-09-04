const { writeReactComponent, readSourceFile } = require('@root/utils');
const { replaceMarkdown } = require('@root/helpers');
const { blockquote } = require('../../callbacks-simpleMDReact');
const { REGEXP_BLOCKQUOTE } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

describe('testing lists-only', () => {
  it('renders lists-only', () => {
    const markdown = readSourceFile(
      'src/parserMDReact/tests/blockquote/content.md',
    );
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_BLOCKQUOTE, blockquote);

    const fileName = 'Blockquote.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
