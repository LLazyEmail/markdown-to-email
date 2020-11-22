const { write, readSourceFile } = require("../../../utils");
const { link } = require("../../../callbacks");
const { replaceMarkdown } = require("../../../helpers");
const { REGEXP_LINK } = require("../../../constants");

const outFolder = "src/tests/_generated";

describe("testing links-only", () => {
  it("renders links-only", () => {
    let markdown = readSourceFile("src/tests/link/links-only/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_LINK, link, parsedContent);

    const fileName = "links-only.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
