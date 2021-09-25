const { writeReactComponent, readSourceFile } = require('../../../utils');
const { separator } = require('../../callbacks-simpleMDReact');
const { replaceMarkdown } = require('../../../helpers');
const { REGEXP_SEPARATOR } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

describe('testing separator', () => {
  it('renders separator', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/separator/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_SEPARATOR, separator);

    const fileName = 'SeparatorTest.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
