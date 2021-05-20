const { readSourceFile } = require('./utils');

const { newLine, checkErrors } = require('./utils');

const { replaceMarkdown, replaceMarkdownPreviewText } = require('./helpers');

const ReplacerObj = require('./replace');

const CallB = require("atherdon-callbacks")

console.log(CallB);

// aaa = PlainCallbacks

// @todo update this method. I'm sure it can be improved.
function parse(source) {
  const markdown = readSourceFile(source);

  const state = {
    content: markdown,
    previewText: '',
    warnings: {
      images: 0,
    },
    errors: {
      previewText: false,
      sponsorshipTop: false,
      sponsorshipBottom: false,
    },
  };

//   PlainCallbacks.replaceMDBinded = replaceMarkdown.bind(state);
//   PlainCallbacks.replaceMDBindedPreviewText =
//     replaceMarkdownPreviewText.bind(state);

//   PlainCallbacks.comments();

//   PlainCallbacks.strong();
//   PlainCallbacks.em();
//   PlainCallbacks.header();
//   PlainCallbacks.image();
//   PlainCallbacks.link();
//   PlainCallbacks.del();
//   PlainCallbacks.q();
//   PlainCallbacks.code();
//   PlainCallbacks.ul();
//   PlainCallbacks.ol();
//   PlainCallbacks.blockquote();
//   PlainCallbacks.hr();
//   PlainCallbacks.paragraph();
//   PlainCallbacks.emptyUl();
//   PlainCallbacks.emptyOl();

//   // this line is generating an error
//   PlainCallbacks.emptyBlockquote();
//   PlainCallbacks.br();
//   PlainCallbacks.sponsorship();
//   PlainCallbacks.memes();
//   PlainCallbacks.separator();


//   ReplacerObj.replaceMDBinded = replaceMarkdown.bind(state);
//   ReplacerObj.replaceMDBindedPreviewText =
//     replaceMarkdownPreviewText.bind(state);

//   ReplacerObj.comments();
//   ReplacerObj.strong();
//   ReplacerObj.em();
//   ReplacerObj.header();
//   ReplacerObj.image();
//   ReplacerObj.link();
//   ReplacerObj.del();
//   ReplacerObj.q();
//   ReplacerObj.code();
//   ReplacerObj.ul();
//   ReplacerObj.ol();
//   ReplacerObj.blockquote();
//   ReplacerObj.hr();
//   ReplacerObj.paragraph();
//   ReplacerObj.emptyUl();
//   ReplacerObj.emptyOl();

//   // this line is generating an error
//   ReplacerObj.emptyBlockquote();
//   ReplacerObj.br();
//   ReplacerObj.sponsorship();
//   ReplacerObj.memes();
//   ReplacerObj.separator();

  //i'm adding it only because error warning didnt return red stuff
  checkErrors(state.errors);

  // console.log( state )

  return state;
}

function parseFullTHing(params) {
  const { source } = params;

  return parse(source);
}

module.exports = { parse, parseFullTHing };
