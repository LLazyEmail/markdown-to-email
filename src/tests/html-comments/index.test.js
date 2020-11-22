const { write, readSourceFile } = require("../../utils");
const { REGEXP_HTML_COMMENTS } = require("../../constants");
const {replaceMarkdown} = require('../../parse-functions');

describe("testing html-comments", () => {
  it("renders html-comments", () => {

    let markdown = readSourceFile("src/tests/html-comments/html-comments.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_HTML_COMMENTS, '', parsedContent);
    const fileName = "html-comments.html";
    write(fileName, parsedContent.content, "src/tests/html-comments");
    expect(1).toBe(1);
    
  });
});
