import stateInit from './state';
import { verification } from './helper-methods';

// markdown is our plain text content
// data is a thing from front matter, can be empty
// config is a configuration map
function newParse({ markdown, data }, config, replacerClass) {
  const dataX = data || false;
  const state = stateInit(markdown, config, dataX);

  // here is going a function that is eating our state
  replacerClass.configure(state);

  state.innerCheckErrors();

  const { content, warnings } = state;
  verification(warnings, content);

  return content;
}

function parse(markdown, configureReplacer, config, data = false) {
  // passing content into the state,
  // so we can do our updates step by step and track any errors
  const dataX = data || false;
  const state = stateInit(markdown, config, dataX);

  configureReplacer(state);

  // i'm adding it only because error warning didnt return red stuff
  state.innerCheckErrors();
  // so state is nobody using to be honest, so i'll comment it right ahead here
  return state;

  // const {content, warnings} = state;

  // verification(warnings, content);

  // return content;
}

// markdown is going from a file
// data
// const parseContent = ({ markdown, data, replaceClass }, config) => {
//   const { content, warnings } = parse(
//     markdown,
//     (state) => replaceClass.configure(state),
//     config,
//     data,
//   );

//   verification(warnings, content);

//   return content;
// };
// TODO after testing, remove parse from export
export { parse, newParse };
// export default parse;
