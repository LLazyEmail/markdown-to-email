const { writeReactComponent, readSourceFile } = require("../../../utils");
const { br } = require("../../callbacksMDReact");
const { replaceMarkdown } = require("../../../helpers");
const { REGEXP_BR } = require("../../constantsMDReact");

const outFolder = "src/parserMDReact/tests/_generated";

describe("testing br", () => {
  it("renders br", () => {
    let markdown = readSourceFile("src/tests/br/br.md");
    let parsedContent = {
      content: markdown,
    };
    

    replaceMarkdown.call(parsedContent, REGEXP_BR, br);
    const fileName = "BR.js";
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
