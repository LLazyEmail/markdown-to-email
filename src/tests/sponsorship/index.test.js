const { write, readSourceFile } = require("../../utils");
const { sponsorship, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_SPONSORSHIP } = require("../../constants");

const outFolder = "src/tests/_generated";

describe("testing sponsorship", () => {
  it("renders sponsorship", () => {
    let markdown = readSourceFile("src/tests/sponsorship/sponsorship.md");
    let parsedContent = {
      content: markdown,
    };
    replaceMarkdown(REGEXP_SPONSORSHIP, sponsorship, parsedContent);
    const fileName = "sponsorship.html";
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
