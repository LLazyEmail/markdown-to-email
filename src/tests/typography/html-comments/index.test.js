const { write, readSourceFile } = require("../../utils");
const { REGEXP_HTML_COMMENTS } = require("atherdon-newsletter-constants");
const { replaceMarkdown } = require("../../helpers");

const outFolder = "src/tests/_generated";

describe("testing html-comments", () => {
  it("renders html-comments", () => {
    let markdown = readSourceFile("src/tests/html-comments/html-comments.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_HTML_COMMENTS, "");
    const fileName = "html-comments.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
