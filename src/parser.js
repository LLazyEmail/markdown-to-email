const { parse } = require("./parse");
const { write, readFile } = require("./utils");
const chalk = require('chalk');

if (process.env.PARSE) {
  let html = readFile("main");
  const { previewText, content } = parse("source/source-full.md");

  html = html.replace("{previewText}", previewText);
  html = html.replace("{content}", content);
  const fileName = "full-template" + Date.now() + ".html";
  write(fileName, html);
  console.log(chalk.green("full template has been parsed successfully"));
} else {
  const parsedContent = parse("source/source.md");
  const fileName = "content" + Date.now() + ".html";
  write(fileName, parsedContent.content);
  console.log(chalk.green("content has been parsed successfully"));
}
