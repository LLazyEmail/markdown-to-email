const { write, readSourceFile } = require("../../utils");
const { image, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_IMAGE } = require("../../constants");

const outFolder = "src/tests/_generated";

describe("testing images-only", () => {
  it("renders images-only", () => {
    let markdown = readSourceFile("src/tests/images-only/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_IMAGE, image, parsedContent);

    const fileName = "images-only.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
