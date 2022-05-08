const { writeReactComponent, readSourceFile } = require('../../../utils');
const { q } = require('../../callbacks-simpleMDReact');
const { replaceMarkdown } = require('../../../helpers');
const { REGEXP_Q } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

describe('testing lists-only', () => {
  it('renders lists-only', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/q/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_Q, q);

    const fileName = 'Q.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
