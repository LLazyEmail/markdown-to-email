import stateInit from '../domain/state';


import configureReplacer from '../domain/replacer-class/configuration-куфсе'

//--------------------------------------
//------
// TODO move this chunk into domain/replacer-class/configuration-react.js
import {
  replaceMarkdown,
  //   replaceMarkdownPreviewText,
} from '../domain/replace-markdown/replace-md';

import ReactReplacer from './replace';


// function configureReplacer(state, isFull) {
//   // CAN WE MOVE OUT CALLBACKS INTO REPLACER?????
//   ReactReplacer.replaceMDBinded = replaceMarkdown.bind(state);

//   // I think we didnt use it quite often
//   // ReactReplacer.replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);

//   // NOTE DON'T CHANGE ORDER OF FUNCTION CALLS
//   if (isFull) {
//     ReactReplacer.previewText();
//   }

//   ReactReplacer.comments();
//   ReactReplacer.typography();

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
// }
// End.
//-----------------------------------



// @todo update this method. I'm sure it can be improved.
function parseMDReact(source, isFull) {
  const state = stateInit(source);

  configureReplacer(state, isFull);

 

  return state;
}

function parseMDReactFullThing(source) {
  return parseMDReact(source, true);
}

export { parseMDReact, parseMDReactFullThing };
