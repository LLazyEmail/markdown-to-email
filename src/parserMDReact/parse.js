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
