const { writeReactComponent, readSourceFile } = require('@root/utils');
const { replaceMarkdown } = require('@root/helpers');
const { image } = require('../../callbacksMDReact');
const { REGEXP_IMAGE } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

describe('testing images-only', () => {
  it('renders images-only', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/images-only/content.md');
    const parsedContent = {
      content: markdown,
      warnings: {
        images: 0,
      },
    };

    replaceMarkdown.call(parsedContent, REGEXP_IMAGE, image);

    const fileName = 'Images.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
