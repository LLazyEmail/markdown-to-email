const { readSourceFile } = require("../utils");

const {
  strong,
  link,
  blockquote,
  mem,
  header,
  italic,
  del,
  q,
  code,
  hr,
  empty,
  previewText,
} = require("./callbacks-simpleMDReact");

const {
  image,
  ulList,
  olList,
  paragraphWrapper,
  sponsorship,
  br,
  newLine,
} = require("./callbacksMDReact");

const { replaceMarkdown } = require("../helpers");

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
} = require("./constantsMDReact");

// @todo update this method. I'm sure it can be improved.
function parseMDReact(source, isFull) {
  let markdown = readSourceFile(source);

  let state = {
    content: markdown,
    warnings: {
      images: 0,
    },
    errors: {
      previewText: false,
      sponsorshipTop: false,
      sponsorshipBottom: false,
    },
  };

  const replaceMDBinded = replaceMarkdown.bind(state);
  // NOTE DON'T CHANGE ORDER OF FUNCTION CALLS
  if (isFull) {
    replaceMDBinded(REGEXP_PREVIEW_TEXT, previewText);
  }

  //   replaceMDBinded(REGEXP_HTML_COMMENTS, empty);
  replaceMDBinded(REGEXP_STRONG, strong);
  replaceMDBinded(REGEXP_EM, italic);
  replaceMDBinded(REGEXP_HEADER, header);

  replaceMDBinded(REGEXP_IMAGE, image);
  replaceMDBinded(REGEXP_LINK, link);

  replaceMDBinded(REGEXP_DEL, del);
  replaceMDBinded(REGEXP_Q, q);
  replaceMDBinded(REGEXP_CODE, code);

  replaceMDBinded(REGEXP_UL_LIST, ulList);
  // TODO UPDATE OLLIST CALLBACK, IT'S NOT WORKING
  //   replaceMDBinded(REGEXP_OL_LIST, olList);
  replaceMDBinded(REGEXP_BLOCKQUOTE, blockquote);
  //   replaceMDBinded(REGEXP_HR, hr);
  replaceMDBinded(REGEXP_PARAGRAPH, paragraphWrapper);
  // TODO CHECK CASES WHEN CONTENT CAN HAVE EMPTY LISTS OR BLOCKQUOTE
  //   replaceMDBinded(REGEXP_EMPTY_UL, empty);
  //   replaceMDBinded(REGEXP_EMPTY_OL, empty);
  //   replaceMDBinded(REGEXP_EMPTY_BLOCKQUOTE, newLine);

  replaceMDBinded(REGEXP_BR, br);
  //   replaceMDBinded(REGEXP_SPONSORSHIP, sponsorship);
  //   replaceMDBinded(REGEXP_MEM, mem);
  //console.log( state )
  return state;
}

function parseMDReactFullThing(params) {
  const { source } = params;

  return parseMDReact(source, true);
}

module.exports = { parseMDReact, parseMDReactFullThing };
