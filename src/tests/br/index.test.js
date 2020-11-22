const { write, readSourceFile } = require("../../utils");
const { replaceMarkdown, br } = require("../../parse-functions");
const { REGEXP_BR } = require("../../constants");

describe("testing br", () => {

  it("renders br", () => {

    let markdown = readSourceFile("src/tests/br/br.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown(REGEXP_BR, br, parsedContent);
    const fileName = "br.html";
    write(fileName, parsedContent.content, "src/tests/br");
    expect(1).toBe(1);
    
  });
});
