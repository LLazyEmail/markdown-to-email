const { write, readSourceFile } = require("../../../utils");
const { ulList } = require("../../../callbacks");
const { replaceMarkdown } = require("../../../helpers");
const { REGEXP_UL_LIST } = require("atherdon-newsletter-constants");

const outFolder = "src/tests/_generated";

describe("testing italic as list item", () => {
  it("testing italic as list item", () => {
    let markdown = readSourceFile("src/tests/italic-as-list-item/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_UL_LIST, ulList);

    const fileName = "italic-list-item.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
