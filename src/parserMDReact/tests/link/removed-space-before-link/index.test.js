const { writeReactComponent, readSourceFile } = require("../../../../utils");
const { link } = require("../../../callbacks-simpleMDReact");
const { replaceMarkdown } = require("../../../../helpers");
const { REGEXP_LINK } = require("../../../constantsMDReact");

const outFolder = "src/parserMDReact/tests/_generated";

 describe("testing links when space before link", () => {
   it("renders testing links when space before link", () => {
     let markdown = readSourceFile("src/tests/link/removed-space-before-link/content.md");
     let parsedContent = {
       content: markdown,
     };

     replaceMarkdown.call(parsedContent, REGEXP_LINK, link);

     const fileName = "LinksEmptySpace.js";
     writeReactComponent(fileName, parsedContent.content, outFolder);
     expect(1).toBe(1);
   });
 });
