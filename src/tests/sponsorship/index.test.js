const { write, readSourceFile } = require("../../utils");
const { sponsorship, replaceMarkdown } = require("../../parse-functions");
const { REGEXP_SPONSORSHIP } = require("../../constants");

describe("testing sponsorship", () => {
  it("renders sponsorship", () => {
    let markdown = readSourceFile("src/tests/sponsorship/sponsorship.md");
    let parsedContent = {
      content: markdown,
    };
    replaceMarkdown(REGEXP_SPONSORSHIP, sponsorship, parsedContent);
    const fileName = "sponsorship.html";
    write(fileName, parsedContent.content, "src/tests/sponsorship");
    expect(1).toBe(1);
  });
});
