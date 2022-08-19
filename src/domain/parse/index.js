import stateInit from '../state';

function parse(source, configureReplacer, configurationMap) {
  // passing content into the state,
  // so we can do our updates step by step and track any errors
  const state = stateInit(source, configurationMap);

  configureReplacer(state);

  // i'm adding it only because error warning didnt return red stuff
  state.innerCheckErrors();

  return state;
}

export default parse;
