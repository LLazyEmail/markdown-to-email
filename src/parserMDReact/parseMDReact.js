const { readSourceFile } = require('../utils');

const { replaceMarkdown, replaceMarkdownPreviewText } = require('../helpers');



// const ReplacerMDReact = require('./replaceMDReact');



// ReactReplacer

const { ReactReplacer } = require("atherdon-callbacks")


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



  ReactReplacer.replaceMDBinded = replaceMarkdown.bind(state);
  ReactReplacer.replaceMDBindedPreviewText =
    replaceMarkdownPreviewText.bind(state);

  // NOTE DON'T CHANGE ORDER OF FUNCTION CALLS
  if (isFull) {
    ReactReplacer.previewText();
  }

  ReactReplacer.comments();
  ReactReplacer.strong();
  ReactReplacer.italic();
  ReactReplacer.header();

  ReactReplacer.image();
  ReactReplacer.link();

  ReactReplacer.del();
  ReactReplacer.q();
  ReactReplacer.code();

  ReactReplacer.ulList();
  // TODO UPDATE OLLIST CALLBACK, IT'S NOT WORKING
  //   ReactReplacer.olList()

  ReactReplacer.blockQuote();
  ReactReplacer.hr();
  ReactReplacer.paragraph();

  // TODO CHECK CASES WHEN CONTENT CAN HAVE EMPTY LISTS OR BLOCKQUOTE
  //   ReactReplacer.emptyUl();
  //   ReactReplacer.emptyOl();
  //   ReactReplacer.emptyBlockQuote();

  ReactReplacer.br();
  ReactReplacer.sponsorship();
  ReactReplacer.mem();
  ReactReplacer.separator();



//   // const replaceMDBinded = replaceMarkdown.bind(state);

//   ReplacerMDReact.replaceMDBinded = replaceMarkdown.bind(state);
//   ReplacerMDReact.replaceMDBindedPreviewText =
//     replaceMarkdownPreviewText.bind(state);

//   // NOTE DON'T CHANGE ORDER OF FUNCTION CALLS
//   if (isFull) {
//     ReplacerMDReact.previewText();
//   }

//   ReplacerMDReact.comments();
//   ReplacerMDReact.strong();
//   ReplacerMDReact.italic();
//   ReplacerMDReact.header();

//   ReplacerMDReact.image();
//   ReplacerMDReact.link();

//   ReplacerMDReact.del();
//   ReplacerMDReact.q();
//   ReplacerMDReact.code();

//   ReplacerMDReact.ulList();
//   // TODO UPDATE OLLIST CALLBACK, IT'S NOT WORKING
//   //   ReplacerMDReact.olList()

//   ReplacerMDReact.blockQuote();
//   ReplacerMDReact.hr();
//   ReplacerMDReact.paragraph();

//   // TODO CHECK CASES WHEN CONTENT CAN HAVE EMPTY LISTS OR BLOCKQUOTE
//   //   ReplacerMDReact.emptyUl();
//   //   ReplacerMDReact.emptyOl();
//   //   ReplacerMDReact.emptyBlockQuote();

//   ReplacerMDReact.br();
//   ReplacerMDReact.sponsorship();
//   ReplacerMDReact.mem();
//   ReplacerMDReact.separator();
  
  
  
  
  // console.log( state )
  
  return state;
}

function parseMDReactFullThing(params) {
  const { source } = params;

  return parseMDReact(source, true);
}

module.exports = { parseMDReact, parseMDReactFullThing };
