const { writeReactComponent, readSourceFile } = require('../../../utils');
const { strong } = require('../../callbacks-simpleMDReact');
const { replaceMarkdown } = require('../../../helpers');
const { REGEXP_STRONG } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

const { 
  REGEXP_STRONG, 
  write, 
  tests_getMarkdownFile, 
  // tests_getOutputFolder, 
  PlainCallbacks 
} = require('@domain/testing')


describe('testing strong', () => {
  it('renders strong', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/strong/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_STRONG, strong);

    const fileName = 'Strong.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
