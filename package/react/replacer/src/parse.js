import {
  replaceMarkdown,
  replaceMarkdownPreviewText,
} from 'atherdon-callbacks';

import { stateInit } from 'markup-generator';


import ReactReplacer from './replace';
// ReactReplacer

function configureReplacer(state, isFull){
  // CAN WE MOVE OUT CALLBACKS INTO REPLACER?????
  ReactReplacer.replaceMDBinded = replaceMarkdown.bind(state);

    // I think we didnt use it quite often
    // ReactReplacer.replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);

    // NOTE DON'T CHANGE ORDER OF FUNCTION CALLS
    if (isFull) {
      ReactReplacer.previewText();
    }

    ReactReplacer.comments();
    ReactReplacer.typography();

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
}

// @todo update this method. I'm sure it can be improved.
function parseMDReact(source, isFull) {
  const state = stateInit(source);


  configureReplacer(state, isFull);

  // // CAN WE MOVE OUT CALLBACKS INTO REPLACER?????
  // ReactReplacer.replaceMDBinded = replaceMarkdown.bind(state);

  // // I think we didnt use it quite often
  // // ReactReplacer.replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);

  // // NOTE DON'T CHANGE ORDER OF FUNCTION CALLS
  // if (isFull) {
  //   ReactReplacer.previewText();
  // }

  // ReactReplacer.comments();
  // ReactReplacer.typography();

  // ReactReplacer.ulList();
  // // TODO UPDATE OLLIST CALLBACK, IT'S NOT WORKING
  // //   ReactReplacer.olList()

  // ReactReplacer.blockQuote();
  // ReactReplacer.hr();
  // ReactReplacer.paragraph();

  // // TODO CHECK CASES WHEN CONTENT CAN HAVE EMPTY LISTS OR BLOCKQUOTE
  // //   ReactReplacer.emptyUl();
  // //   ReactReplacer.emptyOl();
  // //   ReactReplacer.emptyBlockQuote();

  // ReactReplacer.br();
  // ReactReplacer.sponsorship();
  // ReactReplacer.mem();
  // ReactReplacer.separator();

  // console.log( state )

  return state;
}

function parseMDReactFullThing(source) {
  return parseMDReact(source, true);
}

export { parseMDReact, parseMDReactFullThing };
