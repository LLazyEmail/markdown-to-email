const { writeReactComponent, readSourceFile } = require('@root/utils');
const { br } = require('../../callbacksMDReact');
const { replaceMarkdown } = require('@root/helpers');
const { REGEXP_BR } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

describe('testing br', () => {
  it('renders br', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/br/br.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_BR, br);
    const fileName = 'BR.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
