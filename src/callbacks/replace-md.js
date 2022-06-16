// TODO explore other ways of doing replacing thing
// https://www.npmjs.com/package/string-replace-to-array
// https://www.npmjs.com/package/batch-replace
// https://www.npmjs.com/package/pupa

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


// function extractOptions(converter, key) {
//   if (!converter.key) throw new Error('no options for this converter');
//   return converter.key;
// }


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


// TODO what is it?
/* function replaceMarkdownNew(key) {
  const { regexp, callback } = extractOptions(converter, key);

  // const {regexp, callback} = options;

  //   try {

  //       if (!regexp) throw new Error('regular expression is blank');
  //       if (!callback) throw new Error('no callback presented');

  //       // ... add more here later

  //   } catch(err) {
  //       // we need to test how it actually work
  //       var caller_line = err.stack.split("\n")[4];
  //       var index = caller_line.indexOf("at ");
  //       var clean = caller_line.slice(index+2, caller_line.length);

  //       throw err;
  //   }
} */

// TODO THIS WILL BE BROKEN SOOOOON
// This structure was before
// this.replaceMDBinded(this._constants.REGEXP_PREVIEW_TEXT, previewText);
// Should be working like this
// this.replaceMDBinded("previewText");


// @TODO "map" is a stupid name, that is also a name for a lodash method.
const mapObject = {
  strong: {
    constant: REGEXP_STRONG,
    replacer: strong,
  },
  previewText: {
    constant: REGEXP_PREVIEW_TEXT,
    replacer: previewText,
  },
  // 'empty': {
  //   constant: REGEXP_HTML_COMMENTS,
  //   replacer: comments
  // },
  italic: {
    constant: REGEXP_EM,
    replacer: italic,
  },
  header: {
    constant: REGEXP_HEADER,
    replacer: header,
  },
  image: {
    constant: REGEXP_IMAGE,
    replacer: image,
  },
  link: {
    constant: REGEXP_LINK,
    replacer: link,
  },
  del: {
    constant: REGEXP_DEL,
    replacer: del,
  },
  q: {
    constant: REGEXP_Q,
    replacer: q,
  },
  code: {
    constant: REGEXP_CODE,
    replacer: code,
  },
  ulList: {
    constant: REGEXP_UL_LIST,
    replacer: ulList,
  },
  olList: {
    constant: REGEXP_OL_LIST,
    replacer: olList,
  },
  blockquote: {
    constant: REGEXP_BLOCKQUOTE,
    replacer: blockquote,
  },
  hr: {
    constant: REGEXP_HR,
    replacer: hr,
  },
  paragraphWrapper: {
    constant: REGEXP_PARAGRAPH,
    replacer: paragraphWrapper,
  },
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
  br: {
    constant: REGEXP_BR,
    replacer: br,
  },
  sponsorship: {
    constant: REGEXP_SPONSORSHIP,
    replacer: sponsorship,
  },
  memes: {
    constant: REGEXP_MEM,
    replacer: mem,
  },
  separator: {
    constant: REGEXP_SEPARATOR,
    replacer: separator,
  },
};

// @TODO replace the name of this method
function prepOurCallback(callbackName) {
  if (!callbackName) {
    throw new Error('name of callback is undefined or empty');
  }

  const fromMap = mapObject[callbackName];

  return fromMap;
}

function debuggingReplacer(name){
  let namesArr = ['sponsorship'];
  return namesArr.includes(name)
}

function methodForTestingValues(){
  // mapObject.forEach((element) => {
  //   console.log(element.replacer);
  // })

  _.map(mapObject, (element) => {
    // console.log(element)
    // console.log(element.replacer);

    // console.log( typeof element.replacer === 'undefined' );
    // console.log( element.replacer === null );
    // console.log('----------');
    
  });

}

function replaceMarkdown(nameOfCallback) {


  methodForTestingValues();



  // if (!nameOfCallback) {
  //   throw new Error('name of callback is undefined or empty');
  // }

  // const fromMap = map[nameOfCallback];

  const fromMap = prepOurCallback(nameOfCallback);

  
  // console.log(fromMap.constant);
  // console.log(fromMap.replacer);


  // @TODO I dont like  names fromMap & nameOfCallback & forReplacer
  // fromMap.replacer is a single regex value
  // forReplacer is a new sting that will be applied

  // @TODO https://github.com/LLazyEmail/markdown-to-email/issues/931
  var forReplacer = '';
  // if (typeof fromMap.replacer === 'string'){
  //   forReplacer = fromMap.replacer;
  // } else {
    forReplacer = fromMap.replacer.bind(this);
  // }

  // very cool, but generates an error, so not so cool at all.
  // const forReplacer =
  //   typeof fromMap.replacer === 'string'
  //     ? fromMap.replacer
  //     : fromMap.replacer.bind(this);

  

  // console.log(fromMap.replacer);    
  // console.log(forReplacer);
  // console.log('------');

  
  // console.log(nameOfCallback);


  if(debuggingReplacer(nameOfCallback)){
    console.log(nameOfCallback)
    this.content = this.content.replace(fromMap.constant, forReplacer);
  }

  return '';
  // this.content = this.content.replace(fromMap.replacer, forReplacer);

}

// i think this method would be broken now, because we cant play with "this."
// @TODO find out if we really using this method or not?
function replaceMarkdownPreviewText(regexp) {
  // const config = {
  //   content: this.content.trim(),
  // };

  /*
  this.previewText = replaceHTMLWrapper(
        "previewText",
        config,
        "body"
      );
      console.log(this.previewText)
 */

  // this might now working anymore
  this.errors.previewText = true;

  this.content = this.content.replace(regexp, () => this.previewText);
}

export { replaceMarkdown, replaceMarkdownPreviewText };
