const { replaceMarkdown } = require('atherdon-callbacks');

const {
  REGEXP_BR,
  write,
  tests_getMarkdownFile,
  tests_getOutputFolder,

  PlainCallbacks,
} = require('@domain/testing');

const outFolder = tests_getOutputFolder();

const br_replacer = PlainCallbacks._br;

describe('testing br', () => {
  it('renders br', () => {
    // const markdown = readSourceFile(`${root}/content.md`);
    const markdown = tests_getMarkdownFile();

    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_BR, br_replacer);

    const fileName = 'br.html';
    write(fileName, parsedContent.content, outFolder);

    expect(1).toBe(1);
  });
});
