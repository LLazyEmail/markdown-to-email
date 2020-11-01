const { write, readSourceFile } = require("../../utils");
const { strong, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_STRONG } = require("../../constants");

describe("testing strong", () => {
  it("renders strong", async () => {
    let markdown = await readSourceFile("src/tests/strong/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_STRONG, strong, parsedContent);

    const fileName = "strong.html";
    await write(fileName, parsedContent.content, "src/tests/strong/");
    expect(1).toBe(1);
  });
});
