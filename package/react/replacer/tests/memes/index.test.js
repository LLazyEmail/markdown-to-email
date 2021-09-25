const { writeReactComponent, readSourceFile } = require('@root/utils');
const { replaceMarkdown } = require('@root/helpers');
const { mem } = require('../../callbacks-simpleMDReact');
const { REGEXP_MEM } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

// const outFolder = 'src/tests/_generated';

describe('testing mem', () => {
  it('renders mem', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/memes/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_MEM, mem);

    const fileName = 'Memes.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
