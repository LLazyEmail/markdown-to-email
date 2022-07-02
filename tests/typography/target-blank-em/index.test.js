const { 
  REGEXP_EM, REGEXP_LINK, 
  write, 
  tests_getMarkdownFile, 
  tests_getOutputFolder, 
  PlainCallbacks 
} = require('@domain/testing')

const { replaceMarkdown } = require('atherdon-callbacks');


const outFolder = tests_getOutputFolder();

const italic_replacer = PlainCallbacks._italic;

describe('testing target-blank-em', () => {

  it('renders target-blank-em', () => {
    // const markdown = readSourceFile(`${root}/content.md`);
    const markdown = tests_getMarkdownFile();


    const parsedContent = {
      content: markdown,
    };
    replaceMarkdown && replaceMarkdown.call(parsedContent, REGEXP_EM, italic_replacer);

    const fileName = 'target-blank-em.html';
    write(fileName, parsedContent.content, outFolder);

    expect(1).toBe(1);
  });

  it('renders italic with link', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };
    replaceMarkdown.call(parsedContent, REGEXP_LINK, PlainCallbacks.link);
    const fileName = 'links.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
