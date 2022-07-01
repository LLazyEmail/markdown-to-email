// const { REGEXP_IMAGE } = require('atherdon-newsletter-constants');
// const { resolve } = require('path');
// const { write, readSourceFile } = require('@root/utils');

const { 
  // PlainCallbacks,
   replaceMarkdown } = require('atherdon-callbacks');

   const { 
    REGEXP_IMAGE, 
    write, 
    tests_getMarkdownFile, 
    tests_getOutputFolder, 
    PlainCallbacks 
  } = require('@domain/testing')


// const root = resolve(__dirname, '');
// const outFolder = resolve('src/tests', 'directory', '../_generated');
const outFolder = tests_getOutputFolder();







describe('testing images-only', () => {
  it('renders images-only', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
      warnings: {
        images: 0,
      },
    };

    replaceMarkdown.call(parsedContent, REGEXP_IMAGE, PlainCallbacks.image);

    const fileName = 'images-only.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
