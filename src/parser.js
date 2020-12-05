const { parse } = require("./parse");
const { write, readFile, isFolderExists } = require("./utils");

isFolderExists('generated');

const FULL_SOURCE = "source/source-full.md";
const CONTENT_SOURCE = "source/source.md";

switch(process.env.PARSE){
  case "full":
    break;
  case "react":
    //same as default, but with react components instead.
    const parsedContent = parse(CONTENT_SOURCE);
    const fileName = "content" + Date.now() + ".html";
    write(fileName, parsedContent.content);
    break;  
  default:
    const parsedContent = parse(CONTENT_SOURCE);
    const fileName = "content" + Date.now() + ".html";
    write(fileName, parsedContent.content);
}
