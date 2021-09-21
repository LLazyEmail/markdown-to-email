// TODO: something wrong with newsletter-constants module

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
  
  
  // CAN WE MOVE OUT CALLBACKS INTO REPLACER?????
  Replacer.replaceMDBinded = replaceMarkdown.bind(state);
  
  // I think this version isnt working well
  Replacer.replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);

  Replacer.previewText();
  // Replacer.replaceMDBindedPreviewText();
  Replacer.comments();
  // ---
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
