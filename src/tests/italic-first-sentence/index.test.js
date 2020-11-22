const { write, readSourceFile } = require("../../utils");
const { italic, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_EM } = require("../../constants");

const outFolder = "src/tests/_generated";

describe("testing italic-first-sentence", () => {
  it("renders italic-first-sentence", () => {
    let markdown = readSourceFile("src/tests/italic-first-sentence/italic.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_EM, italic, parsedContent);

    const fileName = "italic-first-sentence.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
