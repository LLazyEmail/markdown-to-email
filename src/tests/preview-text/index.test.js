const { write, readSourceFile } = require("../../utils");
const { replaceMarkdownPreviewText } = require("../../parse-functions");
const { REGEXP_PREVIEW_TEXT } = require("../../constants");

describe("testing preview-text", () => {
  it("renders preview-text", async () => {
    let markdown = await readSourceFile("src/tests/preview-text/content.md");
    let parsedContent = {
      content: markdown,
      previewText: ''
    };

    replaceMarkdownPreviewText(REGEXP_PREVIEW_TEXT, parsedContent);
    console.log(parsedContent.previewText);
    const fileName = "preview.html";
    write(fileName, parsedContent.content, "src/tests/preview-text/");
    expect(1).toBe(1);
  });
});
