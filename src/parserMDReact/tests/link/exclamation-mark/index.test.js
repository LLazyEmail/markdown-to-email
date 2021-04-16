const { writeReactComponent, readSourceFile } = require("../../../../utils");
const { link } = require("../../../callbacks-simpleMDReact");
const { replaceMarkdown } = require("../../../../helpers");
const { REGEXP_LINK } = require("../../../constantsMDReact");

const outFolder = "src/parserMDReact/tests/_generated";

describe("testing link/exclamation-mark", () => {
  it("renders link/exclamation-mark", () => {
    let markdown = readSourceFile("src/tests/link/exclamation-mark/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(
      parsedContent,
      REGEXP_LINK,
      link
    );

    const fileName = "ExclamationMark.js";
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
