const { parse } = require("./parse");
const { write, readFile, isFolderExists } = require("./utils");

isFolderExists('generated');

const FULL_SOURCE = "source/source-full.md";
const CONTENT_SOURCE = "source/source.md";

switch(process.env.PARSE){
  case true:
    break;
  //case third:
    //break;  
  default:
    
}

if (process.env.PARSE) {
  let html = readFile("main");
  const { previewText, content } = parse(FULL_SOURCE);

  html = html.replace("{previewText}", previewText);
  html = html.replace("{content}", content);
  const fileName = "full-template" + Date.now() + ".html";
  write(fileName, html);
} else {
  const parsedContent = parse(CONTENT_SOURCE);
  const fileName = "content" + Date.now() + ".html";
  write(fileName, parsedContent.content);
}
