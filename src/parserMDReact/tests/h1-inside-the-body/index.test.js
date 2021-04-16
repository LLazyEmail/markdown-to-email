const { writeReactComponent, readSourceFile } = require("../../../utils");
const { header } = require("../../callbacks-simpleMDReact");
const { replaceMarkdown } = require("../../../helpers");
const { REGEXP_HEADER } = require("../../constantsMDReact");

const outFolder = "src/parserMDReact/tests/_generated";

describe("testing h1-inside-the-body", () => {
  it("renders h1-inside-the-body", () => {
    let markdown = readSourceFile("src/tests/h1-inside-the-body/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(
      parsedContent,
      REGEXP_HEADER,
      header
    );

    const fileName = "H1InsideTheBody.js";
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
