const { readSourceFile } = require('../utils');



const {
  checkErrors, 
  stateInit
} = require('../command-line-methods');




// ReactReplacer
const {
  ReactReplacer, replaceMarkdown, replaceMarkdownPreviewText
} = require("atherdon-callbacks");


// @todo update this method. I'm sure it can be improved.
function parseMDReact(source, isFull) {
  const markdown = readSourceFile(source);

    
  const state = stateInit(markdown);
    

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

  //   ReactReplacer.replaceMDBinded = replaceMarkdown.bind(state);
  //   ReactReplacer.replaceMDBindedPreviewText =
  //     replaceMarkdownPreviewText.bind(state);

  //   // NOTE DON'T CHANGE ORDER OF FUNCTION CALLS
  //   if (isFull) {
  //     ReactReplacer.previewText();
  //   }

  //   ReactReplacer.comments();
  //   ReactReplacer.strong();
  //   ReactReplacer.italic();
  //   ReactReplacer.header();

  //   ReactReplacer.image();
  //   ReactReplacer.link();

  //   ReactReplacer.del();
  //   ReactReplacer.q();
  //   ReactReplacer.code();

  //   ReactReplacer.ulList();
  //   // TODO UPDATE OLLIST CALLBACK, IT'S NOT WORKING
  //   //   ReactReplacer.olList()

  //   ReactReplacer.blockQuote();
  //   ReactReplacer.hr();
  //   ReactReplacer.paragraph();

  //   // TODO CHECK CASES WHEN CONTENT CAN HAVE EMPTY LISTS OR BLOCKQUOTE
  //   //   ReactReplacer.emptyUl();
  //   //   ReactReplacer.emptyOl();
  //   //   ReactReplacer.emptyBlockQuote();

  //   ReactReplacer.br();
  //   ReactReplacer.sponsorship();
  //   ReactReplacer.mem();
  //   ReactReplacer.separator();





  // console.log( state )

  return state;
}



function parseMDReactFullThing(params) {
  const { source } = params;

  return parseMDReact(source, true);
}


module.exports = { parseMDReact, parseMDReactFullThing };
