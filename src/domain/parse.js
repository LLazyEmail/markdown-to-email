import stateInit from './state';

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

// const parseContent = ({ markdown, data }) => {
//   // return parse(
//   //   markdown,
//   //   (state) => Replace.configure(state),
//   //   configurationMap,
//   //   data,
//   // );
// }
// TODO after testing, remove parse from export

export default parse;
