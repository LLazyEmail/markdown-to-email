const { readSourceFile } = require('../utils');

const { replaceMarkdown, replaceMarkdownPreviewText } = require('../helpers');

const ReplacerMDReact = require('./replaceMDReact');

// @todo update this method. I'm sure it can be improved.
function parseMDReact(source, isFull) {
  const markdown = readSourceFile(source);

  const state = {
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

  // const replaceMDBinded = replaceMarkdown.bind(state);

  ReplacerMDReact.replaceMDBinded = replaceMarkdown.bind(state);
  ReplacerMDReact.replaceMDBindedPreviewText =
    replaceMarkdownPreviewText.bind(state);

  // NOTE DON'T CHANGE ORDER OF FUNCTION CALLS
  if (isFull) {
    ReplacerMDReact.previewText();
  }

  ReplacerMDReact.comments();
  ReplacerMDReact.strong();
  ReplacerMDReact.italic();
  ReplacerMDReact.header();

  ReplacerMDReact.image();
  ReplacerMDReact.link();

  ReplacerMDReact.del();
  ReplacerMDReact.q();
  ReplacerMDReact.code();

  ReplacerMDReact.ulList();
  // TODO UPDATE OLLIST CALLBACK, IT'S NOT WORKING
  //   ReplacerMDReact.olList()

  ReplacerMDReact.blockQuote();
  ReplacerMDReact.hr();
  ReplacerMDReact.paragraph();

  // TODO CHECK CASES WHEN CONTENT CAN HAVE EMPTY LISTS OR BLOCKQUOTE
  //   ReplacerMDReact.emptyUl();
  //   ReplacerMDReact.emptyOl();
  //   ReplacerMDReact.emptyBlockQuote();

  ReplacerMDReact.br();
  ReplacerMDReact.sponsorship();
  ReplacerMDReact.mem();
  ReplacerMDReact.separator();
  // console.log( state )
  return state;
}

function parseMDReactFullThing(params) {
  const { source } = params;

  return parseMDReact(source, true);
}

module.exports = { parseMDReact, parseMDReactFullThing };
