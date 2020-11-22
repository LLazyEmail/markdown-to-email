const { write, readSourceFile } = require("../../../utils");
const { link, replaceMarkdown } = require("../../../parse-functions");
const { REGEXP_LINK } = require("../../../constants");

const outFolder = "src/tests/_generated";

describe("testing link/exclamation-mark", () => {
  it("renders link/exclamation-mark", () => {
    let markdown = readSourceFile("src/tests/link/exclamation-mark/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_LINK, link, parsedContent);

    const fileName = "exclamation-mark.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
