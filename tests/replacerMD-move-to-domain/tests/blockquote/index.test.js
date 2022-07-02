const { writeReactComponent } = require('@root/utils');

const { 
  REGEXP_BLOCKQUOTE, 
  write, 
  // tests_getMarkdownFile, 
  tests_getInnerMarkdownFile,
  // tests_getOutputFolder, 
  PlainCallbacks 
} = require('@domain/testing')

const { replaceMarkdown } = require('@root/helpers');


const { blockquote } = require('../../callbacks-simpleMDReact');



const outFolder = 'src/parserMDReact/tests/_generated';

// const outFolder = tests_getOutputFolder();

// TODO update paths, so we can grab a 



describe('testing lists-only', () => {
  it('renders lists-only', () => {

    const markdown = readSourceFile(
      'src/parserMDReact/tests/blockquote/content.md',
    );


    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_BLOCKQUOTE, blockquote);

    const fileName = 'Blockquote.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);


    expect(1).toBe(1);
  });
});
