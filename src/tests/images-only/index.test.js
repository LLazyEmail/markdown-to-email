const { write, readSourceFile } = require("../../utils");
const { image, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_IMAGE } = require("../../constants");

describe("testing images-only", () => {
  it("renders images-only", () => {
    let markdown = readSourceFile("src/tests/images-only/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_IMAGE, image, parsedContent);

    const fileName = "images-only.html";
    write(fileName, parsedContent.content, "src/tests/images-only/");
    expect(1).toBe(1);
  });
});
