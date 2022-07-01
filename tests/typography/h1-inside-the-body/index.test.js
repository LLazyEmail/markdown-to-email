// const { REGEXP_HEADER } = require('atherdon-newsletter-constants');

// const { resolve } = require('path');
// const { write, 
//   readSourceFile 
// } = require('@root/utils');

const { 
  // PlainCallbacks, 
  replaceMarkdown 
} = require('atherdon-callbacks');


const { 
  REGEXP_HEADER, 
  write, 
  tests_getMarkdownFile, 
  tests_getOutputFolder, 
  PlainCallbacks 
} = require('@domain/testing')



// const root = resolve(__dirname, '');
// const outFolder = resolve('src/tests', 'directory', '../_generated');
const outFolder = tests_getOutputFolder();

const header_replacer = PlainCallbacks._header;

describe('testing h1-inside-the-body', () => {
  it('renders h1-inside-the-body', () => {
    
    // const markdown = readSourceFile(`${root}/content.md`);
    const markdown = tests_getMarkdownFile();



    // it's our config file from a replacer aka _functionName
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(
      parsedContent,
      REGEXP_HEADER,
      header_replacer,
    );



    const fileName = 'h1-inside-the-body.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
