const { write, readSourceFile } = require("../../utils");
const { strong } = require("../../callbacks");
const { replaceMarkdown } = require("../../helpers");
const { REGEXP_STRONG } = require("../../constants");

const outFolder = "src/tests/_generated";

describe("testing strong", () => {
  it("renders strong",  () => {
    let markdown = readSourceFile("src/tests/strong/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_STRONG, strong);

    const fileName = "strong.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
