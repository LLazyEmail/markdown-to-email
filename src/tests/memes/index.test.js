const { write, readSourceFile } = require("../../utils");
const { mem, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_MEM } = require("../../constants");

const outFolder = "src/tests/_generated";

describe("testing mem", () => {
  it("renders mem", () => {
    let markdown = readSourceFile("src/tests/memes/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_MEM, mem, parsedContent);

    const fileName = "memes.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
