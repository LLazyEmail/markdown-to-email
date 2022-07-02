
import { Callbacks } from '../../../callbacksReact';

const {_strong,
    _link,
    _blockquote,
    _mem,
    _header,
    _italic,
    _del,
    _q,
    _code,
    _hr,
    _empty,
    //------------
    _ulList,
    _olList,
    //------------
    _image,
    _paragraphWrapper,
    _sponsorship,
    _br,
    //------------
    _separator,
} = Callbacks;

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

  import {
    headingLiteral,
    imageLiteral,
    italicLiteral,
    linkLiteral,
    listLiteral,
    listItemLiteral,
    mainTitleLiteral,
    paragraphLiteral,
    strongLiteral,
    subtitleLiteral,
    qLiteral,
    delLiteral,
    codeLiteral,
    blockquoteLiteral,
    separatorLiteral 
} from '../../../templates/NewsletterReactTemplate/typography';


const ERROR_REGEX_CONSTANT = (value) =>
  `something wrong with RegEx constant ${value}`;
const ERROR_REPLACER_FUNCTION = (value) =>
  `something wrong with replacer function ${value}`;

function objectBuilder(constant, replacer, literal = false) {
    // TODO add typeof for checking replacer as a function
    // console.log( typeof element.replacer === 'undefined' );

    if (!constant) throw new Error(ERROR_REGEX_CONSTANT);
    if (!replacer) throw new Error(ERROR_REPLACER_FUNCTION);

    // i want to replace it later with components
    return { constant, replacer, literal };
}




// const strong = objectBuilder(REGEXP_STRONG, _strong, strongLiteral);
// // console.log(strong);


// const link = objectBuilder(REGEXP_LINK, _link, linkLiteral);

// // delLiteral,
// const del = objectBuilder(REGEXP_DEL, _del, false);


// const image = objectBuilder(REGEXP_IMAGE, _image, imageLiteral);

// const previewText = objectBuilder(
//   REGEXP_PREVIEW_TEXT,
//   _previewText,
//   previewTextLiteral,
// );

// // empty as emptyLiteral,


// const italic = objectBuilder(REGEXP_EM, _italic, italicLiteral);

// // TODO header arent working as suppose too
// const header = objectBuilder(REGEXP_HEADER, _header, headingLiteral);


// // qLiteral,
// const q = objectBuilder(REGEXP_Q, _q, false);

// // codeLiteral,
// const code = objectBuilder(REGEXP_CODE, _code, false);


// const listItem = objectBuilder(
//   REGEXP_SUB_LISTS, 
//   getParsedSubList, 
//   listItemLiteral
//   );

// // this object used only as a stupid way to add a parch for different cases of lists
// // first two params never used
// const list = objectBuilder(REGEXP_UL_LIST, getParsedSubList, listLiteral);

// //  ulListLiteral,
// const ulList = objectBuilder(REGEXP_UL_LIST, _ulList, listLiteral);

// //  olListLiteral,
// const olList = objectBuilder(REGEXP_OL_LIST, _olList, false);

// //  blockquoteLiteral,
// const blockquote = objectBuilder(REGEXP_BLOCKQUOTE, _blockquote, false);

// // hrLiteral,
// const hr = objectBuilder(REGEXP_HR, _hr, false);


// const paragraph = objectBuilder(
//   REGEXP_PARAGRAPH,
//   _paragraphWrapper,
//   paragraphLiteral,
// );

// const br = objectBuilder(REGEXP_BR, _br);


// const sponsorship = objectBuilder(
//   REGEXP_SPONSORSHIP,
//   _sponsorship,
//   sponsorLiteral,
// );

// //  memeLiteral,
// const memes = objectBuilder(REGEXP_MEM, _meme, false);

// const separator = objectBuilder(
//   REGEXP_SEPARATOR, 
//   _separator, 
//   separatorLiteral
//   );

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

// export default {
//     strong,
//     link,
//     del,
//     image,
//     previewText,
//     italic,
//     header,
//     q,
//     code,
//     //-----------
//     ulList,
//     olList,
//     listItem,
//     list,
//     //-----------
//     blockquote,
//     hr,
//     paragraph,
//     br,
//     sponsorship,
//     memes,
//     separator,
//   };
  