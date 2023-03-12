import {
  heading,
  renderSubHeading,
  // spanHeadingBlock,  // will pick it back, disabled for husky
  separatorComponent,
} from 'nmtg-template-mailerlite-typography';
import {
  // buttonComponent,   // will pick it back, disabled for husky
  // divComponent,      // will pick it back, disabled for husky
  imageComponent,
  // imageLink,         // will pick it back, disabled for husky
  // italicComponent,   // will pick it back, disabled for husky
  linkComponent,
  // listComponent,     // will pick it back, disabled for husky
  // listItemComponent, // will pick it back, disabled for husky
  paragraphComponent,
  strongComponent,
} from 'html-typography-tags';

import {
  _strong,
  _link,
  _blockquote,
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
  _br,
  _separator,
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
  REGEXP_SEPARATOR,
} from '../../../../constants/index';

import objectBuilder from '../../../../domain/objectBuilder';
// TODO add here error handlers from domain/error-handle.
// removing them from this file

const map = {
  strong: objectBuilder(REGEXP_STRONG, _strong, strongComponent),
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
  subtitle: objectBuilder(REGEXP_HEADER, _header, renderSubHeading),
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
  separator: objectBuilder(REGEXP_SEPARATOR, _separator, separatorComponent),
};

export default map;
