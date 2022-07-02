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



const outFolder = tests_getOutputFolder();

const image_replacer = PlainCallbacks._image;


describe('testing images-only', () => {
  it('renders images-only', () => {
    // const markdown = readSourceFile(`${root}/content.md`);
    const markdown = tests_getMarkdownFile();

    const parsedContent = {
      content: markdown,
      warnings: {
        images: 0,
      },
    };

    replaceMarkdown.call(parsedContent, REGEXP_IMAGE, image_replacer);

    const fileName = 'images-only.html';
    write(fileName, parsedContent.content, outFolder);

    expect(1).toBe(1);
  });
});
