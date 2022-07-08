// TODO: something wrong with newsletter-constants module
import configureReplacer from '../domain/replacer-class/configuration-plain'
// import stateInit from '../domain/state';

import parse from '../domain/parse'

import {
  generateFullTemplate2,
  // generateFullTemplate,
  // generateContentOnly,
} from './methods';


// function parse(source) {
//   // passing content into the state,
//   // so we can do our updates step by step and track any errors
//   const state = stateInit(source);

//   configureReplacer(state);

//   // i'm adding it only because error warning didnt return red stuff
//   state.innerCheckErrors();

//   // console.log(state)

//   return state;
// }

function parseFullTHing(params) {
  // console.log(params);

  const { source } = params;

  return parse(source, configureReplacer);
}

// export { 
//   parseFullTHing, parse 
// };



export {
  // generateContentOnly, // depricated method
  generateFullTemplate2,

  parseFullTHing, parse 
  // generateFullTemplate,
  // ReactReplacer
};
