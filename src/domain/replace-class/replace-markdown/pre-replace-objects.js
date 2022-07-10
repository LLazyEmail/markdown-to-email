import _ from 'lodash';

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
  //-----
  _ulList,
  _olList,
  getParsedSubList,
  //--------------
  _image,
  _paragraphWrapper,
  _sponsorship,
  _br,
  _separator,
  //
  _previewText,
} from '../../../callbacks/html/index';

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
} from '../../../constants/index';

import { REGEXP_SUB_LISTS } from '../../regular-expressions';

// import misc from '../templates/OuterTemplate/layouts/misc';

// TODO replace this layout with plain v3 layout
import body from '../../../templates/PlainJSOuterTemplate/layouts/body';
const { sponsorLiteral, previewTextLiteral } = body;

import objectBuilder from '../../md/object-builder';


// TODO add here error handlers from domain/error-handle.
// removing them from this file

import {
  headingLiteral,
  titleLiteral,
  //---------
  imageLiteral,
  italicLiteral,
  linkLiteral,
  //-----
  listLiteral,
  listItemLiteral,
  //------------
  
  paragraphLiteral,
  strongLiteral,
  subtitleLiteral,
  separatorLiteral,
} from '../../email-prototypes/plainjs/typography/index';





const strong = objectBuilder(REGEXP_STRONG, _strong, strongLiteral);
// console.log(strong);


const link = objectBuilder(REGEXP_LINK, _link, linkLiteral);

// delLiteral,
const del = objectBuilder(REGEXP_DEL, _del, false);


const image = objectBuilder(REGEXP_IMAGE, _image, imageLiteral);

const previewText = objectBuilder(
  REGEXP_PREVIEW_TEXT,
  _previewText,
  previewTextLiteral,
);




const italic = objectBuilder(REGEXP_EM, _italic, italicLiteral);

// TODO header arent working as suppose too
const header = objectBuilder(REGEXP_HEADER, _header, headingLiteral);

// sub item for header. not ideal
const subtitle = objectBuilder(REGEXP_HEADER, _header, subtitleLiteral);

// title for header. not sure if it's main title or not
const title = objectBuilder(REGEXP_HEADER, _header, titleLiteral);

// qLiteral,
const q = objectBuilder(REGEXP_Q, _q, false);

// codeLiteral,
const code = objectBuilder(REGEXP_CODE, _code, false);


const listItem = objectBuilder(
  REGEXP_SUB_LISTS, 
  getParsedSubList, 
  listItemLiteral
);

// this object used only as a stupid way to add a parch for different cases of lists
// first two params never used
const list = objectBuilder(REGEXP_UL_LIST, getParsedSubList, listLiteral);

//  ulListLiteral,
const ulList = objectBuilder(REGEXP_UL_LIST, _ulList, listLiteral);

//  olListLiteral,
const olList = objectBuilder(REGEXP_OL_LIST, _olList, false);

//  blockquoteLiteral,
const blockquote = objectBuilder(REGEXP_BLOCKQUOTE, _blockquote, false);

// hrLiteral,
const hr = objectBuilder(REGEXP_HR, _hr, false);


const paragraph = objectBuilder(
  REGEXP_PARAGRAPH,
  _paragraphWrapper,
  paragraphLiteral,
);

const br = objectBuilder(REGEXP_BR, _br);


const sponsorship = objectBuilder(
  REGEXP_SPONSORSHIP,
  _sponsorship,
  sponsorLiteral,
);

//  memeLiteral,
const memes = objectBuilder(REGEXP_MEM, _meme, false);

const separator = objectBuilder(
  REGEXP_SEPARATOR, 
  _separator, 
  separatorLiteral
  );


// empty as emptyLiteral,

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
  //----------
  header,
  subtitle,
  title,
  //-----------
  q,
  code,
  //-----------
  ulList,
  olList,
  listItem,
  list,
  //-----------
  blockquote,
  hr,
  paragraph,
  br,
  sponsorship,
  memes,
  separator,
};
