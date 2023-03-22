import stateInit from '../state';
import { verification } from '../helper-methods';

// markdown is our plain text content
// data is a thing from front matter, can be empty
// config is a configuration map
function newParse({ markdown, data }, config, configureReplacer) {
  const dataX = data || false;
  const state = stateInit(markdown, config, dataX);

  // here is going a function that is eating our state
  configureReplacer(state);

  state.innerCheckErrors();

  const { content, warnings } = state;
  verification(warnings, content);

  return content;
}

export default newParse;
