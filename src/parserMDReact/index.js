import configureReplacer from '../domain/replacer-class/configuration-react';
import { generateReactContent, generateReactFullTemplate } from './methods';

//---------------
// TODO replace with separated parse method

// import parse from '../domain/parse'
import stateInit from '../domain/state';

// @todo update this method. I'm sure it can be improved.
function parseMDReact(source, isFull) {
  const state = stateInit(source);
  configureReplacer(state, isFull);

  return state;
}

function parseMDReactFullThing(source) {
  return parseMDReact(source, true);
}

export {
  generateReactContent,
  generateReactFullTemplate,
  parseMDReact,
  parseMDReactFullThing,
};
