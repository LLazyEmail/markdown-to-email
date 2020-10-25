const { write, readSourceFile } = require('./utils');
const { replaceHeaders,
  replaceImages,
  replaceLinks,
  replaceBolds,
  replaceDels,
  replaceQ,
  replaceCode,
  replaceULLists,
  replaceOLLIsts,
  replaceBlockquotes,
  replaceHRS,
  replacePairs,
  replaceEmptyULOLTags,
  removeBRS,
  removeBlockquotes,
  replaceEMS
} = require('./parserUtils');

let markdown = readSourceFile('source/source.md');

let parsedContent = {
  "content": markdown
}

replaceHeaders(parsedContent);
replaceImages(parsedContent);
replaceLinks(parsedContent);
replaceBolds(parsedContent);
replaceDels(parsedContent);
replaceQ(parsedContent);
replaceCode(parsedContent);
replaceULLists(parsedContent);
replaceOLLIsts(parsedContent);
replaceBlockquotes(parsedContent);
replaceHRS(parsedContent);
replacePairs(parsedContent);
replaceEmptyULOLTags(parsedContent);
removeBRS(parsedContent);
removeBlockquotes(parsedContent);
// replaceEMS(parsedContent);

const fileName = "parsed-content-" + Date.now() + ".html";

write(fileName, parsedContent.content);