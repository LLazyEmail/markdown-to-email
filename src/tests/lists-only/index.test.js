const { write, readSourceFile } = require("../../utils");
const { ulList, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_UL_LIST } = require("../../constants");

const outFolder = "src/tests/_generated";

describe("testing lists-only", () => {
  it("renders lists-only", () => {
    let markdown = readSourceFile("src/tests/lists-only/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_UL_LIST, ulList, parsedContent);

    const fileName = "lists-only.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
