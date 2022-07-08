// TODO: something wrong with newsletter-constants module
import configureReplacer from '../domain/replacer-class/configuration-plain'
import stateInit from '../domain/state';


// TODO update this method. I'm sure it can be improved.
function parse(source) {
  // passing content into the state,
  // so we can do our updates step by step and track any errors
  const state = stateInit(source);

  configureReplacer(state);

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

export { 
  parseFullTHing, parse 
};
