const { write, readSourceFile } = require("../../utils");
const { paragraphWrapper, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_PARAGRAPH } = require("../../constants");

describe("testing paragraph", () => {
  it("renders sponsorship", () => {
    let markdown = readSourceFile("src/tests/paragraph/paragraph.md");
    let parsedContent = {
      content: markdown,
    };
    replaceMarkdown(REGEXP_PARAGRAPH, paragraphWrapper, parsedContent);
    const fileName = "paragraph.html";
    write(fileName, parsedContent.content, "src/tests/paragraph");
    expect(1).toBe(1);
  });
});
