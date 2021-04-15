const { write, readSourceFile } = require("../../../utils");
const { italic } = require("../../callbacks-simpleMDReact");
const { replaceMarkdown } = require("../../../helpers");
const { REGEXP_EM } = require("../../constantsMDReact");

const outFolder = "src/parserMDReact/tests/_generated";

describe("testing italic-first-sentence", () => {
  it("renders italic-first-sentence", () => {
    let markdown = readSourceFile("src/tests/italic-first-sentence/italic.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_EM, italic);

    const fileName = "ItalicFirstSentence.js";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
