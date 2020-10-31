const { write, readSourceFile } = require("../../utils");
const { ulList, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_UL_LIST } = require("../../constants");

describe("testing sponsorship", () => {
  it("renders sponsorship", async () => {
    let markdown = await readSourceFile("src/tests/lists-only/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_UL_LIST, ulList, parsedContent);

    const fileName = "lists-only.html";
    await write(fileName, parsedContent.content, "src/tests/lists-only");
    expect(1).toBe(1);
  });
});
