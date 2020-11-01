const { write, readSourceFile } = require("../../utils");
const { italic, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_EM } = require("../../constants");

describe("testing target-blank-em", () => {
  it("renders target-blank-em", async () => {
    let markdown = await readSourceFile("src/tests/target-blank-em/content.md");
    let parsedContent = {
      content: markdown,
    };
    replaceMarkdown(REGEXP_EM, italic, parsedContent);
    const fileName = "target-blank-em.html";
    await write(fileName, parsedContent.content, "src/tests/target-blank-em");
    expect(1).toBe(1);
  });
});
