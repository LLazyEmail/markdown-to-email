// TODO explore other ways of doing replacing thing
// https://www.npmjs.com/package/string-replace-to-array
// https://www.npmjs.com/package/batch-replace
// https://www.npmjs.com/package/pupa

import { sponsorship } from "./callbacksHtml/methods/callbacks";
import { separator } from "./callbacksHtml/methods/custom";
import { mem, previewText } from "./callbacksHtml/methods/simple";

// function extractOptions(converter, key) {
//   if (!converter.key) throw new Error('no options for this converter');

//   return converter.key;
// }

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

const map = {
    'strong': {
      constant: REGEXP_STRONG,
      callback: strong
    },
    'previewText':{
      constant: REGEXP_PREVIEW_TEXT,
      callback: previewText
    },
    'empty': {
      constant: REGEXP_HTML_COMMENTS,
      callback: comments
    },
    'italic': {
      constant: REGEXP_EM,
      callback: italic
    },
    'header': {
      constant: REGEXP_HEADER,
      callback: header
    },
    'image': {
      constant: REGEXP_IMAGE,
      callback: image
    },
    'link': { 
      constant: REGEXP_LINK,
      callback: link
    },
    'del': {
      constant: REGEXP_DEL,
      callback: del
    },
    'q': { 
      constant: REGEXP_Q,
      callback: q
    },
    'code': {
      constant: REGEXP_CODE,
      callback: code
    },
    'ulList': { 
      constant: REGEXP_UL_LIST,
      callback: ulList
    },
    'olList': { 
      constant: REGEXP_OL_LIST,
      callback: olList 
    },
    'blockquote': {
      constant: REGEXP_BLOCKQUOTE,
      callback: blockQuote
    },
    'hr': {
      constant: REGEXP_HR,
      callback: hr
    },
    'paragraphWrapper': {
      constant: REGEXP_PARAGRAPH,
      callback: paragraph
    },
    'REGEXP_EMPTY_UL': {
      constant: REGEXP_EMPTY_UL,
      callback: emptyUl
    },
    'REGEXP_EMPTY_OL': {
      constant: REGEXP_EMPTY_OL,
      callback: emptyOl
    },
    'REGEXP_EMPTY_BLOCKQUOTE': {
      constant: REGEXP_EMPTY_BLOCKQUOTE,
      callback: emptyBlockQuote
    },
    'REGEXP_BR': { 
      constant: REGEXP_BR,
      callback: br
    },
    'sponsorship': {
      constant: REGEXP_SPONSORSHIP,
      callback: sponsorship
    },
    'mem': {
      constant: REGEXP_MEM,
      callback: mem
    },
    'separator': {
      constant: REGEXP_SEPARATOR,
      callback: separator
    }
}

function replaceMarkdown(callback) {
  // console.log('helpers- replace markdown method')
  // console.log(typeof callback)
  const str = map.callback
  // eslint-disable-next-line no-useless-catch
  try {
    let fixedCallbackMethod = false;

    if (!typeof callback) {
      console.log('ERRROROROR HERE!!!!');
      console.log(regexp);
      console.log(callback);
      throw new Error('catching this error');
    }

    switch (typeof callback) {
      case 'string':
        fixedCallbackMethod = callback;
        break;

      default:
        fixedCallbackMethod = callback.bind(this);
        break;
    }

    const result = this.content.replace(str.constant, fixedCallbackMethod);
    this.content = result;
  } catch (e) {
    /* work in case there is an error */

    throw e;

    // throw new Error('replaceMarkdown method');
  }

  // this.content = this.content.replace(regexp, fixedCallbackMethod);
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
