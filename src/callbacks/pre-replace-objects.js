
// import objectAssign from 'object-assign';
 

// import { sponsorship } from "./callbacksHtml/methods/callbacks";
// import { separator } from "./callbacksHtml/methods/custom";
// --
import _ from 'lodash';
import { _previewText } from './callbacksHtml/methods/simple';
import {
  _strong,
  
  _link,
  _blockquote,
  _mem,
  _header,
  _italic,
  _del,
  _q,
  _code,
  _hr,
  // _empty,
  _ulList,
  _olList,
  _image,
  _paragraphWrapper,

  _sponsorship,

  _br,
  _separator,
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

// later we'll extend this method
// object assing will help us.
function objectBuilder(constant, replacer){
  return { constant, replacer };
}


// const objectBuilder = (constant, replacer) => {constant, replacer}


const strong = objectBuilder(REGEXP_STRONG, _strong);
// console.log(strong);

const link = objectBuilder(REGEXP_LINK, _link)

const del  = objectBuilder(REGEXP_DEL, _del)

const image  = objectBuilder(REGEXP_IMAGE, _image)

const previewText = objectBuilder(REGEXP_PREVIEW_TEXT, _previewText)

const italic  = objectBuilder(REGEXP_EM, _italic)

const header  = objectBuilder(REGEXP_HEADER, _header)

const q = objectBuilder(REGEXP_Q, _q)

const code  = objectBuilder(REGEXP_CODE, _code)

const ulList = objectBuilder(REGEXP_UL_LIST, _ulList)

const olList = objectBuilder(REGEXP_OL_LIST, _olList)

const blockquote = objectBuilder(REGEXP_BLOCKQUOTE, _blockquote)

const hr = objectBuilder(REGEXP_HR, _hr)

const paragraphWrapper = objectBuilder(REGEXP_PARAGRAPH, _paragraphWrapper)

const br = objectBuilder(REGEXP_BR, _br)

const sponsorship = objectBuilder(REGEXP_SPONSORSHIP, _sponsorship)

const memes = objectBuilder(REGEXP_MEM, _mem)

const separator = objectBuilder(REGEXP_SEPARATOR, _separator)


  // 'REGEXP_EMPTY_UL': {
  //   constant: REGEXP_EMPTY_UL,
  //   replacer: emptyUl
  // },
  // 'REGEXP_EMPTY_OL': {
  //   constant: REGEXP_EMPTY_OL,
  //   replacer: emptyOl
  // },
  // 'REGEXP_EMPTY_BLOCKQUOTE': {
  //   constant: REGEXP_EMPTY_BLOCKQUOTE,
  //   replacer: emptyBlockQuote
  // },



export default { 
  strong,   
  link, 
  del,  
  image,  
  previewText, 
  italic,  
  header,  
  q, 
  code ,
  ulList, 
  olList ,
  blockquote ,
  hr ,
  paragraphWrapper ,
  br ,
  sponsorship,
  memes ,
  separator, 
} 