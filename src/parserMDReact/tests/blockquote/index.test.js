const { writeReactComponent, readSourceFile } = require("../../../utils");
const { blockquote } = require("../../callbacks-simpleMDReact");
const { replaceMarkdown } = require("../../../helpers");
const { REGEXP_BLOCKQUOTE } = require("../../constantsMDReact");

const outFolder = "src/parserMDReact/tests/_generated";

describe("testing lists-only", () => {
  it("renders lists-only", () => {
    let markdown = readSourceFile(
      "src/parserMDReact/tests/blockquote/content.md"
    );
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_BLOCKQUOTE, blockquote);

    const fileName = "Blockquote.js";
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
