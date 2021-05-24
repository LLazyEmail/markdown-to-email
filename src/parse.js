const { readSourceFile } = require('./utils');

const { checkErrors } = require('./utils');

const { replaceMarkdown, replaceMarkdownPreviewText } = require('./helpers');

// const ReplacerObj = require('./replace');

const { Replacer } = require("atherdon-callbacks")

// console.log(Replacer);

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
  const { source } = params;

  return parse(source);
}

module.exports = { parse, parseFullTHing };
