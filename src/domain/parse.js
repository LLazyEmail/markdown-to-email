import stateInit from './state';

function parse(markdown, configureReplacer, config, data = false) {
  // passing content into the state,
  // so we can do our updates step by step and track any errors
  const dataX = data || false;
  const state = stateInit(markdown, config, dataX);

  configureReplacer(state);

  // i'm adding it only because error warning didnt return red stuff
  state.innerCheckErrors();

  return state;
}

export default parse;
