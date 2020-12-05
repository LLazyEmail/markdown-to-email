const { write, readSourceFile, isFolderExists } = require("../../utils");
const { br } = require("../../callbacks");
const {replaceMarkdown} = require('../../helpers');
const { REGEXP_BR } = require("../../constants");

isFolderExists('./src/tests/_generated')
const outFolder = "src/tests/_generated";

describe("testing br", () => {
  it("renders br", () => {
    let markdown = readSourceFile("src/tests/br/br.md");
    let parsedContent = {
      content: markdown,
    };
    console.log("parsedContent", parsedContent.content);
    
    // console.log(/([\n]{2,})/g.test(`


    // `));/((\r\n){2,})/g
    replaceMarkdown(REGEXP_BR, br, parsedContent);
    // console.log("parsedContent", parsedContent.content);
    // console.log("\n\n".replace(/(\n{2,})/g, (text, n) => console.log('n', n)));
    const fileName = "br.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
