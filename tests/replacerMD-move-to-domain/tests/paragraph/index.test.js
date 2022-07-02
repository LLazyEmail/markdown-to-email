const { writeReactComponent } = require('@root/utils');

const { replaceMarkdown } = require('@root/helpers');

const { paragraphWrapper } = require('../../callbacksMDReact');

// const { REGEXP_PARAGRAPH } = require('../../constantsMDReact');


const outFolder = 'src/parserMDReact/tests/_generated';

const { 
  REGEXP_PARAGRAPH, 
  write, 
  tests_getMarkdownFile, 
  // tests_getOutputFolder, 
  PlainCallbacks 
} = require('@domain/testing')


describe('testing paragraph', () => {
  it('renders sponsorship', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/paragraph/paragraph.md');

    const parsedContent = {
      content: markdown,
    };
    replaceMarkdown.call(parsedContent, REGEXP_PARAGRAPH, paragraphWrapper);

    const fileName = 'Paragraph.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    
    expect(1).toBe(1);
  });
});
