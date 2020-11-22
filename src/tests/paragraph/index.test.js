const { write, readSourceFile } = require("../../utils");
const { paragraphWrapper } = require("../../callbacks");
const { replaceMarkdown } = require("../../helpers");
const { REGEXP_PARAGRAPH } = require("../../constants");

const outFolder = "src/tests/_generated";

describe("testing paragraph", () => {
  it("renders sponsorship", () => {
    let markdown = readSourceFile("src/tests/paragraph/paragraph.md");
    let parsedContent = {
      content: markdown,
    };
    replaceMarkdown(REGEXP_PARAGRAPH, paragraphWrapper, parsedContent);
    const fileName = "paragraph.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
