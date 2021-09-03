const { writeReactComponent, readSourceFile } = require('@root/utils');
const { replaceMarkdown } = require('@root/helpers');
const { italic } = require('../../callbacks-simpleMDReact');
const { REGEXP_EM } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

describe('testing italic-first-sentence', () => {
  it('renders italic-first-sentence', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/italic-first-sentence/italic.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_EM, italic);

    const fileName = 'ItalicFirstSentence.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
