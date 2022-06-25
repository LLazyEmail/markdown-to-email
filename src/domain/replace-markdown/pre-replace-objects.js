import _ from 'lodash';
import { _previewText } from '../../callbacks/callbacksHtml/methods/simple';
import {
  _strong,
  
  _link,
  _blockquote,
  _meme,
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
} from '../../callbacks/callbacksHtml/index';

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
} from '../../constants/index';

// import misc from '../templates/OuterTemplate/layouts/misc';



import body from '../../templates/PlainJSOuterTemplate/layouts/body';

const { sponsorLiteral, previewTextLiteral } = body;



// import {
  // sponsor as sponsorLiteral 
  // sponsorComponent
  
  
  //strong as strongLiteral,
  
  //link as linkLiteral,
  //blockquote as blockquoteLiteral,
  //meme as memeLiteral,
  //header as headerLiteral,
  //italic as italicLiteral,
  //del as delLiteral,
  //q as qLiteral,
  //code as codeLiteral,
  //hr  as hrLiteral,
  // empty as emptyLiteral,
  //ulList as ulListLiteral,
  //olList as olListLiteral,
  //image as imageLiteral,
  //paragraph as paragraphLiteral,
  
// TODO add here error handlers from domain/error-handle.
// removing them from this file

import {
  headingLiteral,
  imageLiteral,
  italicLiteral,
  linkLiteral,

  listLiteral,
  listItemLiteral,

  titleLiteral,

  paragraphLiteral,
  strongLiteral,

  subtitleLiteral,
  separatorLiteral 
} from '../plainjs-template/typography/index';

  
// console.log(paragraphLiteral);

const ERROR_REGEX_CONSTANT = (value) => `something wrong with RegEx constant ${value}`;
const ERROR_REPLACER_FUNCTION = (value) =>  `something wrong with replacer function ${value}`;


// const objectBuilder = (constant, replacer) => {constant, replacer}
function objectBuilder(constant, replacer, literal = false){

  // TODO add typeof for checking replacer as a function
  // console.log( typeof element.replacer === 'undefined' );
  
  if(!constant) throw new Error(ERROR_REGEX_CONSTANT)
  if(!replacer) throw new Error(ERROR_REPLACER_FUNCTION)



  // i want to replace it later with components
  return { constant, replacer, literal };
}


  //strongLiteral,
const strong = objectBuilder(REGEXP_STRONG, _strong, strongLiteral);
// console.log(strong);


// as linkLiteral,  
const link = objectBuilder(REGEXP_LINK, _link, linkLiteral)

  // as delLiteral,
const del  = objectBuilder(REGEXP_DEL, _del, delLiteral)

  // as imageLiteral,
const image  = objectBuilder(REGEXP_IMAGE, _image, imageLiteral)

const previewText = objectBuilder(REGEXP_PREVIEW_TEXT, _previewText, previewTextLiteral)

// empty as emptyLiteral,

  // as italicLiteral,
const italic  = objectBuilder(REGEXP_EM, _italic, italicLiteral)


  // as headerLiteral,
const header  = objectBuilder(REGEXP_HEADER, _header, headerLiteral)

// console.log(header);

  //  qLiteral,
const q = objectBuilder(REGEXP_Q, _q, qLiteral)

//  codeLiteral,

const code  = objectBuilder(REGEXP_CODE, _code, codeLiteral)
  //  ulListLiteral,

const ulList = objectBuilder(REGEXP_UL_LIST, _ulList, ulListLiteral)

  //  olListLiteral,

const olList = objectBuilder(REGEXP_OL_LIST, _olList, olListLiteral)

//  blockquoteLiteral,  
const blockquote = objectBuilder(REGEXP_BLOCKQUOTE, _blockquote, blockquoteLiteral)

  //   hrLiteral,

const hr = objectBuilder(REGEXP_HR, _hr, hrLiteral)

  //  paragraphLiteral

const paragraphWrapper = objectBuilder(REGEXP_PARAGRAPH, _paragraphWrapper, paragraphLiteral)

const br = objectBuilder(REGEXP_BR, _br)

// folder: 'body',
const sponsorship = objectBuilder(REGEXP_SPONSORSHIP, _sponsorship, sponsorLiteral)


//  memeLiteral,
const memes = objectBuilder(REGEXP_MEM, _meme, memeLiteral)

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
