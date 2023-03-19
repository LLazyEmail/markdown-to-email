import stateInit from './state';
import { verification } from './helper-methods';

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

const parseContent = ({ markdown, data, replaceClass }, config) => {
  
  const { content, warnings } = parse(
    markdown,
    (state) => replaceClass.configure(state),
    config,
    data,
  );

  verification(warnings, content);

  return content;   
 };

// const verificationAndParcing = (options) => {
//   // const { frontMatter, markdown } = options;

//   const {
//     content,
//     warnings,
//     // previewText
//   } = parseContent(options);

//   verification(warnings, content);

//   return {
//     content,
//     warnings,
//   };
// };
// TODO after testing, remove parse from export
// export { parse, parseContent } ;
export default parse;
