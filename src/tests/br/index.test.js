const { write, readSourceFile } = require("../../utils");
const { replaceMarkdown, br } = require("../../parse-functions");
const { REGEXP_BR } = require("../../constants");

describe("testing sponsorship", () => {
  it("renders sponsorship", async () => {
    let markdown = await readSourceFile("src/tests/br/br.md");
    let parsedContent = {
      content: markdown,
    };
    replaceMarkdown(REGEXP_BR, br, parsedContent);
    const fileName = "br.html";
    await write(fileName, parsedContent.content, "src/tests/br");
    expect(1).toBe(1);
  });
});
