const { parse } = require("./parse");
const { write, readFile } = require("./utils");

if (process.env.PARSE) {
  const parsedContent = parse("source/source-full.md");
  let html = readFile("main");
  const previewText = readFile("body/previewText").replace(
    "{content}",
    "Preview text"
  );
  html = html.replace("{previewText}", previewText);
  html = html.replace("{content}", parsedContent.content);
  const fileName = "full-template" + Date.now() + ".html";
  write(fileName, html);
} else {
  const parsedContent = parse("source/source.md");
  const fileName = "content" + Date.now() + ".html";
  write(fileName, parsedContent.content);
}
