import { configureReplacer } from '../domain/react';



// import { generateReactContent, generateReactFullTemplate } from './methods';

// //---------------
// // TODO replace with separated parse method

import parse from '../domain/parse'

// // @todo update this method. I'm sure it can be improved.
// function parseMDReact(source, isFull) {
//   const state = stateInit(source);
//   configureReplacer(state, isFull);

//   return state;
// }

function parseReactFullTemplate(source) {

 // console.log(params);
// const { source } = params;

return parse(source, configureReplacer);
 
}

export {
//   generateReactContent,
//   generateReactFullTemplate,
  parse,
  parseReactFullTemplate,
};
