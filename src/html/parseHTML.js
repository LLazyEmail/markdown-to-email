const {
  Replacer,
  replaceMarkdown,
  replaceMarkdownPreviewText,
} = require('atherdon-callbacks');

// TODO: something wrong with newsletter-constants module
const {
  REGEXP_PREVIEW_TEXT,
} = require('atherdon-newsletter-constants');
const {
  stateInit,
} = require('../command-line-methods');

// TODO update this method. I'm sure it can be improved.
function parse(source) {
  // passing content into the state,
  // so we can do our updates step by step and track any errors
  const state = stateInit(source);

  Replacer.replaceMDBinded = replaceMarkdown.bind(state);
  Replacer.replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);

  Replacer.previewText();
  Replacer.replaceMDBindedPreviewText(REGEXP_PREVIEW_TEXT);
  Replacer.comments();


  Replacer.typography();

  // Replacer.strong();
  // Replacer.em();
  // Replacer.header();
  // Replacer.image();
  // Replacer.link();
  // Replacer.del();
  // Replacer.q();
  // Replacer.code();
  // Replacer.ul();
  // Replacer.ol();
  // Replacer.blockquote();
  // Replacer.hr();
  // Replacer.paragraph();
  // Replacer.emptyUl();
  // Replacer.emptyOl();

  Replacer.miscellaneous();

  // // this line is generating an error
  // Replacer.emptyBlockquote();
  // Replacer.br();

  // if (!process.env.PARSE === 'noAdv' || process.env.PARSE === 'full') {
  //   Replacer.sponsorship();
  // }

  // Replacer.memes();
  // Replacer.separator();

  // i'm adding it only because error warning didnt return red stuff
  // checkErrors(state.errors);
  state.innerCheckErrors();

  // console.log(state)

  return state;
}

function parseFullTHing(params) {
  // console.log(params);

  const { source } = params;

  return parse(source);
}

module.exports = { parse, parseFullTHing };
