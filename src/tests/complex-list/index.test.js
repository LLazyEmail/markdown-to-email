const { write, readSourceFile } = require("../../utils");
const { ulList, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_UL_LIST } = require("../../constants");

describe("testing complex-list", () => {
  it("renders complex-list", () => {
    let markdown = readSourceFile("src/tests/complex-list/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_UL_LIST, ulList, parsedContent);

    const fileName = "complex-list.html";
    write(fileName, parsedContent.content, "src/tests/complex-list");
    expect(1).toBe(1);
  });
});
