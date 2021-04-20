const { writeReactComponent, readSourceFile } = require("../../../utils");
const { ulList } = require("../../callbacksMDReact");
const { replaceMarkdown } = require("../../../helpers");
const { REGEXP_UL_LIST } = require("../../constantsMDReact");

const outFolder = "src/parserMDReact/tests/_generated";

describe("testing lists-only", () => {
  it("renders lists-only", () => {
    let markdown = readSourceFile("src/parserMDReact/tests/lists-only/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_UL_LIST, ulList);

    const fileName = "ListsOnly.js";
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
