const { readSourceFile } = require("./utils");
const {
  header,
  image,
  link,
  ulList,
  olList,
  blockquote,
  paragraphWrapper,
  sponsorship,
  br,
  strong,
  mem,
  italic, 
  del,
  q,
  code,
  hr,
  empty,
  newLine
} = require("./callbacks");
const { replaceMarkdown, replaceMarkdownPreviewText } = require("./helpers");

const {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_DEL,
  REGEXP_Q,
  REGEXP_CODE,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_PARAGRAPH,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
  REGEXP_BR,
  REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_EM,
  REGEXP_SPONSORSHIP,
  REGEXP_HTML_COMMENTS,
  REGEXP_MEM,
  REGEXP_PREVIEW_TEXT,
} = require("./constants");

// @todo update this method. I'm sure it can be improved.
function parse(source) {
  let markdown = readSourceFile(source);
  let parsedContent = {
    content: markdown,
    previewText: "",
  };

  replaceMarkdown(REGEXP_HTML_COMMENTS, empty, parsedContent);
  replaceMarkdownPreviewText(REGEXP_PREVIEW_TEXT, parsedContent);

  replaceMarkdown(REGEXP_STRONG, strong, parsedContent);
  replaceMarkdown(REGEXP_EM, italic, parsedContent);

  replaceMarkdown(REGEXP_HEADER, header, parsedContent);
  replaceMarkdown(REGEXP_IMAGE, image, parsedContent);
  replaceMarkdown(REGEXP_LINK, link, parsedContent);

  replaceMarkdown(REGEXP_DEL, del, parsedContent);
  replaceMarkdown(REGEXP_Q, q, parsedContent);
  replaceMarkdown(REGEXP_CODE, code, parsedContent);

  replaceMarkdown(REGEXP_UL_LIST, ulList, parsedContent);
  replaceMarkdown(REGEXP_OL_LIST, olList, parsedContent);

  replaceMarkdown(REGEXP_BLOCKQUOTE, blockquote, parsedContent);

  replaceMarkdown(REGEXP_HR, hr, parsedContent);
  replaceMarkdown(REGEXP_PARAGRAPH, paragraphWrapper, parsedContent);
  replaceMarkdown(REGEXP_EMPTY_UL, empty, parsedContent);
  replaceMarkdown(REGEXP_EMPTY_OL, empty, parsedContent);
  replaceMarkdown(REGEXP_EMPTY_BLOCKQUOTE, newLine, parsedContent);

  replaceMarkdown(REGEXP_BR, br, parsedContent);
  replaceMarkdown(REGEXP_SPONSORSHIP, sponsorship, parsedContent);
  replaceMarkdown(REGEXP_MEM, mem, parsedContent);

  return parsedContent;
}

module.exports = { parse };
