const { write, readSourceFile } = require("../../utils");
const { mem } = require("../../callbacks-simple");
const { replaceMarkdown } = require("../../helpers");
const { REGEXP_MEM } = require("atherdon-newsletter-constants");

const outFolder = "src/tests/_generated";

describe("testing mem", () => {
  it("renders mem", () => {
    let markdown = readSourceFile("src/tests/memes/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_MEM, mem);

    const fileName = "memes.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
