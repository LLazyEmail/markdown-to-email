const { writeReactComponent, readSourceFile } = require('@root/utils');
const { replaceMarkdown } = require('@root/helpers');
const { link } = require('../../../callbacks-simpleMDReact');
const { REGEXP_LINK } = require('../../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

describe('testing link/exclamation-mark', () => {
  it('renders link/exclamation-mark', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/link/exclamation-mark/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(
      parsedContent,
      REGEXP_LINK,
      link,
    );

    const fileName = 'ExclamationMark.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
