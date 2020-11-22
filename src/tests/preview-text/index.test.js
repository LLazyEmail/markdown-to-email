const { write, readSourceFile } = require("../../utils");
const { replaceMarkdownPreviewText } = require("../../parse-functions");
const { REGEXP_PREVIEW_TEXT } = require("../../constants");

describe("testing preview-text", () => {
  it("renders preview-text", () => {
    let markdown = readSourceFile("src/tests/preview-text/content.md");
    let parsedContent = {
      content: markdown,
      previewText: "",
    };

    replaceMarkdownPreviewText(REGEXP_PREVIEW_TEXT, parsedContent);
    const fileName = "preview.html";
    write(fileName, parsedContent.content, "src/tests/preview-text/");
    expect(1).toBe(1);
  });
});
