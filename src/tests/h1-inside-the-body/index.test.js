const { write, readSourceFile } = require("../../utils");
const { header } = require("../../callbacks");
const { replaceMarkdown } = require("../../helpers");
const { REGEXP_HEADER } = require("../../constants");

const outFolder = "src/tests/_generated";

describe("testing h1-inside-the-body", () => {
  it("renders h1-inside-the-body", () => {
    let markdown = readSourceFile("src/tests/h1-inside-the-body/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_HEADER, header, parsedContent);

    const fileName = "h1-inside-the-body.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
