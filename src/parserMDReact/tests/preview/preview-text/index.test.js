const { writeReactComponent, readSourceFile } = require("../../../../utils");
const { previewText } = require("../../../callbacks-simpleMDReact");
const { replaceMarkdown } = require("../../../../helpers");
const { REGEXP_PREVIEW_TEXT } = require("../../../constantsMDReact");

const outFolder = "src/parserMDReact/tests/_generated";

describe("testing preview-text", () => {
  it("renders preview-text", () => {
    let markdown = readSourceFile("src/tests/preview/preview-text/content.md");
    let parsedContent = {
      content: markdown,
      errors: {
        previewText: false,
      }
    };

    replaceMarkdown.call(parsedContent, REGEXP_PREVIEW_TEXT, previewText);
    const fileName = "Preview1.js";
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});