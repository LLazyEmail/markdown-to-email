import stateInit from '../state';

function parse(source, configureReplacer) {
  // passing content into the state,
  // so we can do our updates step by step and track any errors
  const state = stateInit(source);

  configureReplacer(state);

  // i'm adding it only because error warning didnt return red stuff
  state.innerCheckErrors();

  // console.log(state)

  return state;
}

export default parse;
