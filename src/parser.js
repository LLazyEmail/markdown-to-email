const { parse } = require("./parse");
const { write, readFile, isFolderExists } = require("./utils");

isFolderExists('generated');

if (process.env.PARSE) {
  let html = readFile("main");
  const { previewText, content } = parse("source/source-full.md");

  html = html.replace("{previewText}", previewText);
  html = html.replace("{content}", content);
  const fileName = "full-template" + Date.now() + ".html";
  write(fileName, html);
} else {
  const parsedContent = parse("source/source.md");
  const fileName = "content" + Date.now() + ".html";
  write(fileName, parsedContent.content);
}
