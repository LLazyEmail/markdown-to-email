const { readSourceFile, checkErrors } = require('./utils');
const { replaceMarkdown, replaceMarkdownPreviewText } = require('./helpers');
const { Replacer } = require("atherdon-callbacks")

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

  Replacer.replaceMDBinded = replaceMarkdown.bind(state);
  Replacer.replaceMDBindedPreviewText =
    replaceMarkdownPreviewText.bind(state);

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
  Replacer.sponsorship();
  Replacer.memes();
  Replacer.separator();

  //i'm adding it only because error warning didnt return red stuff
  checkErrors(state.errors);

  // console.log( state )

  return state;
}

function parseFullTHing(params) {

console.log(params);

  const { source } = params;

  return parse(source);
}

module.exports = { parse, parseFullTHing };
