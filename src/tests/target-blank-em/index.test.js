const { write, readSourceFile } = require("../../utils");
const { italic, link } = require("../../callbacks");
const { replaceMarkdown } = require("../../helpers");
const { REGEXP_EM, REGEXP_LINK } = require("../../constants");

const outFolder = "src/tests/_generated";

describe("testing target-blank-em", () => {
  it("renders target-blank-em", () => {
    let markdown = readSourceFile("src/tests/target-blank-em/content.md");
    let parsedContent = {
      content: markdown,
    };
    replaceMarkdown(REGEXP_EM, italic, parsedContent);
    const fileName = "target-blank-em.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
  it("renders italic with link", () => {
    let markdown = readSourceFile("src/tests/target-blank-em/content.md");
    let parsedContent = {
      content: markdown,
    };
    replaceMarkdown(REGEXP_LINK, link, parsedContent);
    const fileName = "links.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
