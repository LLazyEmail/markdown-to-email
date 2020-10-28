const { write, readSourceFile } = require("./utils");
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
  replaceMarkdown,
} = require("./parse-functions");

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
  REGEXP_HTML_COMMENTS
} = require("./constants");

async function parse() {
  let markdown = await readSourceFile("source/source.md");
  let parsedContent = {
    content: markdown,
  };

  
  replaceMarkdown(REGEXP_HTML_COMMENTS, '', parsedContent);

  replaceMarkdown(REGEXP_HEADER, header, parsedContent);
  replaceMarkdown(REGEXP_IMAGE, image, parsedContent);
  replaceMarkdown(REGEXP_LINK, link, parsedContent);
  replaceMarkdown(REGEXP_STRONG, "<strong>$2</strong>", parsedContent);
  replaceMarkdown(REGEXP_DEL, "<del>$1</del>", parsedContent);
  replaceMarkdown(REGEXP_Q, "<q>$1</q>", parsedContent);
  replaceMarkdown(REGEXP_CODE, "<code>$1</code>", parsedContent);
  replaceMarkdown(REGEXP_UL_LIST, ulList, parsedContent);
  replaceMarkdown(REGEXP_OL_LIST, olList, parsedContent);
  replaceMarkdown(REGEXP_BLOCKQUOTE, blockquote, parsedContent);
  replaceMarkdown(REGEXP_HR, "\n<hr />", parsedContent);
  replaceMarkdown(REGEXP_PARAGRAPH, paragraphWrapper, parsedContent);
  replaceMarkdown(REGEXP_EMPTY_UL, "", parsedContent);
  replaceMarkdown(REGEXP_EMPTY_OL, "", parsedContent);
  replaceMarkdown(REGEXP_EMPTY_BLOCKQUOTE, "\n", parsedContent);
  replaceMarkdown(REGEXP_EM, "<em>$2</em>", parsedContent);

  replaceMarkdown(REGEXP_BR, br, parsedContent);
  replaceMarkdown(REGEXP_SPONSORSHIP, sponsorship, parsedContent);

  const fileName = "parsed-content-second-" + Date.now() + ".html";
  await write(fileName, parsedContent.content);
}

parse();
