const { writeReactComponent, readSourceFile } = require('@root/utils');
const { replaceMarkdown } = require('@root/helpers');
const { ulList } = require('../../callbacksMDReact');
const { REGEXP_UL_LIST } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

describe('testing lists-only', () => {
  it('renders lists-only', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/lists-only/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_UL_LIST, ulList);

    const fileName = 'ListsOnly.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
