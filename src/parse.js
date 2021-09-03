const { 
  readSourceFile, 
  
  
  checkErrors 
} = require('./utils');

const { 
  Replacer, 
  replaceMarkdown, 
  replaceMarkdownPreviewText 
} = require("atherdon-callbacks");

const { 
  REGEXP_PREVIEW_TEXT 
} = require('atherdon-newsletter-constants');

function stateInit = ( markdown ) => {
  // @TODO should we move out state from this file?
  
  let stateObject = {
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
  
  return stateObject;
}

// @todo update this method. I'm sure it can be improved.
function parse(source) {
  const markdown = readSourceFile(source);

  let state = stateInit(markdown);

  Replacer.replaceMDBinded = replaceMarkdown.bind(state);
  Replacer.replaceMDBindedPreviewText =
    replaceMarkdownPreviewText.bind(state);

  Replacer.previewText();
  Replacer.replaceMDBindedPreviewText(REGEXP_PREVIEW_TEXT);
  Replacer.comments();

  Replacer.strong();
  Replacer.em();
  Replacer.header();
  Replacer.image();
  Replacer.link();
  Replacer.del();
  Replacer.q();
  Replacer.code();
  Replacer.ul();
  Replacer.ol();
  Replacer.blockquote();
  Replacer.hr();
  Replacer.paragraph();
  Replacer.emptyUl();
  Replacer.emptyOl();

  // this line is generating an error
  Replacer.emptyBlockquote();
  Replacer.br();

  if (!process.env.PARSE === 'noAdv' || process.env.PARSE === 'full') {
    Replacer.sponsorship();
  }
  
  Replacer.memes();
  Replacer.separator();

  //i'm adding it only because error warning didnt return red stuff
  checkErrors(state.errors);

  // console.log(state)

  return state;
}

function parseFullTHing(params) {

  // console.log(params);

  const { source } = params;

  return parse(source);
}

module.exports = { parse, parseFullTHing };
