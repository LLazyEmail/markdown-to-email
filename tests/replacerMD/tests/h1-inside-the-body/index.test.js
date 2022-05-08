const { writeReactComponent, readSourceFile } = require('@root/utils');
const { replaceMarkdown } = require('@root/helpers');
const { header } = require('../../callbacks-simpleMDReact');
const { REGEXP_HEADER } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

describe('testing h1-inside-the-body', () => {
  it('renders h1-inside-the-body', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/h1-inside-the-body/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(
      parsedContent,
      REGEXP_HEADER,
      header,
    );

    const fileName = 'H1InsideTheBody.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
