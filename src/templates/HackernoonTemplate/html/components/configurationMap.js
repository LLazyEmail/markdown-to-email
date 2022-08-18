import typography from 'atherdon-newsletter-js-layouts-typography';
import body from 'atherdon-newsletter-js-layouts-body';
// import * as typography1 from 'nmtg-template-mailerlite-typography';

import {
  _strong,
  _link,
  _blockquote,
  _meme,
  _header,
  //--------
  _italic,
  // _italicAsterix,
  //---------
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
} from '../../../../callbacks/html/index';

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
  // REGEXP_EM,
  REGEXP_SPONSORSHIP,
  REGEXP_MEM,
  REGEXP_PREVIEW_TEXT,
  REGEXP_PARAGRAPH,
  REGEXP_SEPARATOR,
} from '../../../../constants/index';

import {
  REGEXP_SUB_LISTS,
  REGEXP_UNDERSCORE_ITALIC,
  REGEXP_ASTERIX_ITALIC,
} from '../../../../domain/regular-expressions';

// atherdon-newsletter-js-layouts-misc

import objectBuilder from '../../../../domain/md/object-builder';
// console.log(typography1);
// TODO add here error handlers from domain/error-handle.
// removing them from this file

const {
  headingComponent,
  titleComponent,
  imageComponent,
  italicComponent,
  linkComponent,
  listComponent,
  listItemComponent,
  paragraphComponent,
  subtitleComponent,
  separatorComponent,
  strongComponent,
} = typography;

const { sponsorComponent, previewTextComponent } = body;

const map = {
  strong: objectBuilder(REGEXP_STRONG, _strong, strongComponent),
  link: objectBuilder(REGEXP_LINK, _link, linkComponent),
  del: objectBuilder(REGEXP_DEL, _del, false),
  image: objectBuilder(REGEXP_IMAGE, _image, imageComponent),
  previewText: objectBuilder(
    REGEXP_PREVIEW_TEXT,
    _previewText,
    previewTextComponent,
  ),
  italic: objectBuilder(REGEXP_UNDERSCORE_ITALIC, _italic, italicComponent),
  italic_asterix: objectBuilder(
    REGEXP_ASTERIX_ITALIC,
    _italic,
    italicComponent,
  ),
  header: objectBuilder(REGEXP_HEADER, _header, headingComponent),
  subtitle: objectBuilder(REGEXP_HEADER, _header, subtitleComponent),
  title: objectBuilder(REGEXP_HEADER, _header, titleComponent),
  q: objectBuilder(REGEXP_Q, _q, false),
  code: objectBuilder(REGEXP_CODE, _code, false),
  listItem: objectBuilder(
    REGEXP_SUB_LISTS,
    getParsedSubList,
    listItemComponent,
  ),
  // this object used only as a stupid way to add a parch for different cases of lists
  // first two params never used
  list: objectBuilder(REGEXP_UL_LIST, getParsedSubList, listComponent),
  ulList: objectBuilder(REGEXP_UL_LIST, _ulList, listComponent),
  olList: objectBuilder(REGEXP_OL_LIST, _olList, false),
  blockquote: objectBuilder(REGEXP_BLOCKQUOTE, _blockquote, false),
  hr: objectBuilder(REGEXP_HR, _hr, false),
  paragraph: objectBuilder(
    REGEXP_PARAGRAPH,
    _paragraphWrapper,
    paragraphComponent,
  ),
  br: objectBuilder(REGEXP_BR, _br),
  sponsorship: objectBuilder(
    REGEXP_SPONSORSHIP,
    _sponsorship,
    sponsorComponent,
  ),
  memes: objectBuilder(REGEXP_MEM, _meme, false),
  separator: objectBuilder(REGEXP_SEPARATOR, _separator, separatorComponent),
};

// OLD version
// const italic:objectBuilder(REGEXP_EM, _italic, italicLiteral);

// REGEXP_UNDERSCORE_ITALIC,
// REGEXP_ASTERIX_ITALIC,
// qLiteral,
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

export default map;
