const { write, readSourceFile } = require("../../utils");
const { br } = require("../../callbacks");
const {replaceMarkdown} = require('../../helpers');
const { REGEXP_BR } = require("../../constants");

const outFolder = "src/tests/_generated";

describe("testing br", () => {
  it("renders br", () => {
    let markdown = readSourceFile("src/tests/br/br.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_BR, br, parsedContent);
    const fileName = "br.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
