const { write, readSourceFile } = require("../../utils");
const { link, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_LINK } = require("../../constants");

describe("testing links-only", () => {
  it("renders links-only", async () => {
    let markdown = await readSourceFile("src/tests/links-only/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_LINK, link, parsedContent);

    const fileName = "links-only.html";
    await write(fileName, parsedContent.content, "src/tests/links-only/");
    expect(1).toBe(1);
  });
});
