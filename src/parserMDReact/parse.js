import stateInit from '../domain/state';
import configureReplacer from '../domain/replacer-class/configuration-react'

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
