const { writeReactComponent, readSourceFile } = require("../../../../utils");
const { link } = require("../../../callbacks-simpleMDReact");
const { replaceMarkdown } = require("../../../../helpers");
const { REGEXP_LINK } = require("../../../constantsMDReact");

const outFolder = "src/parserMDReact/tests/_generated";

describe("testing links-only", () => {
  it("renders links-only", () => {
    let markdown = readSourceFile("src/parserMDReact/tests/link/links-only/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_LINK, link);

    const fileName = "LinksOnly.js";
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
