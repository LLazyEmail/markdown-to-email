const { write, readSourceFile } = require('./utils');
const { header, image, link, ulList, olList, blockquote, para } = require('./just-a-guess-functions');
const {
  replaceMarkdown
} = require('./parserUtils');

let markdown = readSourceFile('source/source.md');

let parsedContent = {
  "content": markdown
}

const REGEXP_HEADER = /(#+)(.*)/g;
const REGEXP_IMAGE = /!\[([^\[]+)\]\(([^\)]+)\)/g;
const REGEXP_LINK = /\[([^\[]+)\]\(([^\)]+)\)/g;
const REGEXP_STRONG = /(\*\*|__)(.*?)\1/g;
const REGEXP_DEL = /\~\~(.*?)\~\~/g;
const REGEXP_Q = /\:\"(.*?)\"\:/g;
const REGEXP_CODE = /`(.*?)`/g;
const REGEXP_UL_LIST = /\n\*(.*)/g;
const REGEXP_OL_LIST = /\n[0-9]+\.(.*)/g;
const REGEXP_BLOCKQUOTE = /\n(&gt;|\>)(.*)/g;
const REGEXP_HR = /\n-{5,}/g;
const REGEXP_PAIR = /\n([^\n]+)\n/g;
const REGEXP_EMPTY_UL = /<\/ul>\s?<ul>/g;
const REGEXP_EMPTY_OL = /<\/ol>\s?<ol>/g;
const REGEXP_BR = /<\/div>\n?<br>\n*?<ul/g;
const REGEXP_EMPTY_BLOCKQUOTE = /<\/blockquote><blockquote>/g;
const REGEXP_EM = /(\*|_)(.*?)\1/g;

replaceMarkdown(REGEXP_HEADER, header, parsedContent);
replaceMarkdown(REGEXP_IMAGE, image, parsedContent);
replaceMarkdown(REGEXP_LINK, link, parsedContent);
replaceMarkdown(REGEXP_STRONG, '<strong>$2</strong>', parsedContent);
replaceMarkdown(REGEXP_DEL, '<del>$1</del>', parsedContent);
replaceMarkdown(REGEXP_Q, '<q>$1</q>', parsedContent);
replaceMarkdown(REGEXP_CODE, '<code>$1</code>', parsedContent);
replaceMarkdown(REGEXP_UL_LIST, ulList, parsedContent);
replaceMarkdown(REGEXP_OL_LIST, olList, parsedContent);
replaceMarkdown(REGEXP_BLOCKQUOTE, blockquote, parsedContent);
replaceMarkdown(REGEXP_HR, '\n<hr />', parsedContent);
replaceMarkdown(REGEXP_PAIR, para, parsedContent);
replaceMarkdown(REGEXP_EMPTY_UL, '', parsedContent);
replaceMarkdown(REGEXP_EMPTY_OL, '', parsedContent);
replaceMarkdown(REGEXP_BR, '<\/div>\n<ul', parsedContent);
replaceMarkdown(REGEXP_EMPTY_BLOCKQUOTE, '\n', parsedContent);
replaceMarkdown(REGEXP_EM, '<em>$2</em>', parsedContent);

const fileName = "parsed-content-" + Date.now() + ".html";

write(fileName, parsedContent.content);