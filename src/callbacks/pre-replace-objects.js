
import objectAssign from 'object-assign';
 

// import { sponsorship } from "./callbacksHtml/methods/callbacks";
// import { separator } from "./callbacksHtml/methods/custom";
// --
import _ from 'lodash';
import { previewText } from './callbacksHtml/methods/simple';
import {
  strong,
  
  link,
  blockquote,
  mem,
  header,
  italic,
  del,
  q,
  code,
  hr,
  // empty,
  ulList,
  olList,
  image,
  paragraphWrapper,

  sponsorship,

  br,
  separator,
} from './callbacksHtml/index';





import {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_DEL,
  REGEXP_Q,
  REGEXP_CODE,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_BR,
  REGEXP_EM,
  REGEXP_SPONSORSHIP,
  REGEXP_MEM,
  REGEXP_PREVIEW_TEXT,
  REGEXP_PARAGRAPH,
  REGEXP_SEPARATOR,
} from '../constants';


// function extractOptions(converter, key) {
//   if (!converter.key) throw new Error('no options for this converter');
//   return converter.key;
// }


// objectAssign({foo: 0}, {bar: 1});
// //=> {foo: 0, bar: 1}
 
// // multiple sources
// objectAssign({foo: 0}, {bar: 1}, {baz: 2});

// Module Pattern

function returnReplaceObject(constant, replacer){
  return { constant, replacer };
}


const strongA = returnReplaceObject(REGEXP_STRONG, strong);
console.log(strongA);

// strong: {
//   constant: REGEXP_STRONG,
//   replacer: strong,
// },

export default {strongA}