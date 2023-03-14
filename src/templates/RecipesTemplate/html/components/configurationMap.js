import * as typography from 'nmtg-template-mailerlite-typography';

import {
  _strong,
  _link,
  _blockquote,
  _meme,
  _header,
  //--------
  // _italic,
  // _italicAsterix,
  //---------
  _del,
  _q,
  _code,
  _hr,
  // _empty,
  //-----
  // _ulList,
  _olList,
  // getParsedSubList,
  //--------------
  _image,
  _paragraphWrapper,
  // _sponsorship,
  _br,
  _separator,
  //
  // _previewText,
} from '../../../../callbacks/html/index';

import {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_DEL,
  REGEXP_Q,
  REGEXP_CODE,
  // REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_BR,
  // REGEXP_EM,
  REGEXP_PARAGRAPH,
} from '../../../../constants/index';
import {
  // REGEXP_SPONSORSHIP,
  REGEXP_MEM,
  // REGEXP_PREVIEW_TEXT,
  REGEXP_SEPARATOR,
} from '../../../../domain/regular-expressions/index';
import objectBuilder from '../../../../domain/objectBuilder';
// TODO add here error handlers from domain/error-handle.
// removing them from this file

const {
  // buttonComponent,
  // buttonComponent2,
  heading,
  strong,
  subheading,
  //------
  imageComponent,
  // imgWrapper,
  paragraphComponent,
  linkComponent,
  separatorComponent,
} = typography;

const map = {
  // previewText: objectBuilder(
  //   REGEXP_PREVIEW_TEXT,
  //   _previewText,
  //   previewTextComponent,
  // ),
  strong: objectBuilder(REGEXP_STRONG, _strong, strong),
  link: objectBuilder(REGEXP_LINK, _link, linkComponent),
  del: objectBuilder(REGEXP_DEL, _del, false),
  image: objectBuilder(REGEXP_IMAGE, _image, imageComponent),
  // italic: objectBuilder(REGEXP_UNDERSCORE_ITALIC, _italic, italicComponent),
  // italic_asterix: objectBuilder(
  //   REGEXP_ASTERIX_ITALIC,
  //   _italic,
  //   italicComponent,
  // ),
  header: objectBuilder(REGEXP_HEADER, _header, heading),
  subtitle: objectBuilder(REGEXP_HEADER, _header, subheading),
  // title: objectBuilder(REGEXP_HEADER, _header, titleComponent),
  q: objectBuilder(REGEXP_Q, _q, false),
  code: objectBuilder(REGEXP_CODE, _code, false),
  // listItem: objectBuilder(
  //   REGEXP_SUB_LISTS,
  //   getParsedSubList,
  //   listItemComponent,
  // ),
  // list: objectBuilder(REGEXP_UL_LIST, getParsedSubList, listComponent),
  // ulList: objectBuilder(REGEXP_UL_LIST, _ulList, listComponent),
  olList: objectBuilder(REGEXP_OL_LIST, _olList, false),
  blockquote: objectBuilder(REGEXP_BLOCKQUOTE, _blockquote, false),
  hr: objectBuilder(REGEXP_HR, _hr, false),
  paragraph: objectBuilder(
    REGEXP_PARAGRAPH,
    _paragraphWrapper,
    paragraphComponent,
  ),
  br: objectBuilder(REGEXP_BR, _br),
  // sponsorship: objectBuilder(
  //   REGEXP_SPONSORSHIP,
  //   _sponsorship,
  //   sponsorComponent,
  // ),
  memes: objectBuilder(REGEXP_MEM, _meme, false),
  separator: objectBuilder(REGEXP_SEPARATOR, _separator, separatorComponent),
};

export default map;
