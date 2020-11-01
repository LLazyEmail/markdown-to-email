const { write, readSourceFile } = require("../../../utils");
const { link, replaceMarkdown } = require("../../../parse-functions");
const { REGEXP_LINK } = require("../../../constants");

describe("testing link/exclamation-mark", () => {
  it("renders link/exclamation-mark", async () => {
    let markdown = await readSourceFile("src/tests/link/exclamation-mark/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_LINK, link, parsedContent);

    const fileName = "exclamation-mark.html";
    await write(fileName, parsedContent.content, "src/tests/link/exclamation-mark/");
    expect(1).toBe(1);
  });
});
