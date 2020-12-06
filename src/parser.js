const { parse } = require("./parse");
const { write, readFile } = require("./utils");
const chalk = require('chalk');

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
  console.log(chalk.green("full template has been parsed successfully"));
} else {
  const parsedContent = parse(CONTENT_SOURCE);
  const fileName = "content" + Date.now() + ".html";
  write(fileName, parsedContent.content);
  console.log(chalk.green("content has been parsed successfully"));
}
