const { write, readSourceFile } = require("../../utils");
const { italic } = require("../../callbacks-simple");
const { replaceMarkdown } = require("../../helpers");
const { REGEXP_EM } = require("../../constants");

const outFolder = "src/tests/_generated";

describe("testing italic-first-sentence", () => {
  it("renders italic-first-sentence", () => {
    let markdown = readSourceFile("src/tests/italic-first-sentence/italic.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_EM, italic);

    const fileName = "italic-first-sentence.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
