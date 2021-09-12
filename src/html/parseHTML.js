// TODO: something wrong with newsletter-constants module
const {
  REGEXP_PREVIEW_TEXT,
} = require('atherdon-newsletter-constants');

const {
  Replacer,
  replaceMarkdown,
  replaceMarkdownPreviewText,
} = require('atherdon-callbacks');

const { stateInit } = require('markup-generator');


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

  Replacer.miscellaneous();

  // i'm adding it only because error warning didnt return red stuff
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
