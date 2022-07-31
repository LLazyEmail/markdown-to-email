import typography from 'atherdon-newsletter-react-layouts-typography';
import { Callbacks } from '../../../callbacksReact';

import {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_DEL,
  REGEXP_Q,
  REGEXP_CODE,
  // REGEXP_UL_LIST,
  // REGEXP_OL_LIST,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_BR,
  REGEXP_EM,
  // REGEXP_SPONSORSHIP,
  // REGEXP_MEM,
  // REGEXP_PREVIEW_TEXT,
  REGEXP_PARAGRAPH,
  // REGEXP_SEPARATOR,
} from '../../../constants/index';

import objectBuilder from '../../md/object-builder';

const {
  _strong,
  _link,
  _blockquote,
  //   _mem,
  _header,
  _italic,
  _del,
  _q,
  _code,
  _hr,
  //   _empty,
  //------------
  // _ulList,
  // _olList,
  //------------
  _image,
  _paragraph,
  // _sponsorship,
  _br,
  //------------
  // _separator,

  // _previewText,
} = Callbacks;

const {
  headingComponent,
  imageComponent,
  italicComponent,
  linkComponent,
  mainTitleComponent,
  paragraphComponent,
  strongComponent,
  subtitleComponent,
  qComponent,
  codeComponent,
} = typography;

const map = {
  strong: objectBuilder(REGEXP_STRONG, _strong, strongComponent),
  link: objectBuilder(REGEXP_LINK, _link, linkComponent),
  del: objectBuilder(REGEXP_DEL, _del, false),
  image: objectBuilder(REGEXP_IMAGE, _image, imageComponent),
  // TODO find out what module to use to import previewText
  // previewText: objectBuilder(
  //   REGEXP_PREVIEW_TEXT,
  //   _previewText,
  //   previewTextLiteral,
  // ),
  italic: objectBuilder(REGEXP_EM, _italic, italicComponent),
  header: objectBuilder(REGEXP_HEADER, _header, headingComponent),
  // TODO header arent working as suppose too
  subtitle: objectBuilder(REGEXP_HEADER, _header, subtitleComponent),
  title: objectBuilder(REGEXP_HEADER, _header, mainTitleComponent),
  q: objectBuilder(REGEXP_Q, _q, qComponent),
  code: objectBuilder(REGEXP_CODE, _code, codeComponent),

  // listItem:objectBuilder(
  //   REGEXP_SUB_LISTS,
  //   getParsedSubList,
  //   listItemLiteral
  //   ),

  // this object used only as a stupid way to add a parch for different cases of lists
  // first two params never used
  // list:objectBuilder(REGEXP_UL_LIST, getParsedSubList, listLiteral),
  // ulList:objectBuilder(REGEXP_UL_LIST, _ulList, listLiteral),
  // olList:objectBuilder(REGEXP_OL_LIST, _olList, false),
  blockquote: objectBuilder(REGEXP_BLOCKQUOTE, _blockquote, false),
  hr: objectBuilder(REGEXP_HR, _hr, false),
  paragraph: objectBuilder(REGEXP_PARAGRAPH, _paragraph, paragraphComponent),
  br: objectBuilder(REGEXP_BR, _br),
};
// sponsorship:objectBuilder(
//   REGEXP_SPONSORSHIP,
//   _sponsorship,
//   sponsorLiteral,
// );

// // //  memeLiteral,
// memes:objectBuilder(REGEXP_MEM, _meme, false);

// separator:objectBuilder(
//   REGEXP_SEPARATOR,
//   _separator,
//   separatorLiteral
//   );

// // 'REGEXP_EMPTY_UL': {
// //   constant: REGEXP_EMPTY_UL,
// //   replacer: emptyUl
// // },

// // 'REGEXP_EMPTY_OL': {
// //   constant: REGEXP_EMPTY_OL,
// //   replacer: emptyOl
// // },

// // 'REGEXP_EMPTY_BLOCKQUOTE': {
// //   constant: REGEXP_EMPTY_BLOCKQUOTE,
// //   replacer: emptyBlockQuote
// // },

export default map;
