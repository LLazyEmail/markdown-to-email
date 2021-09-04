const { writeReactComponent, readSourceFile } = require('@root/utils');
const { replaceMarkdown } = require('@root/helpers');
const { link } = require('../../../callbacks-simpleMDReact');
const { REGEXP_LINK } = require('../../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

describe('testing links when space before link', () => {
  it('renders testing links when space before link', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/link/removed-space-before-link/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_LINK, link);

    const fileName = 'LinksEmptySpace.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
