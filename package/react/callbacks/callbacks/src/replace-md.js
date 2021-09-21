import { REGEXP_PREVIEW_TEXT } from 'atherdon-newsletter-constants';


// @TODO explore it later
// try {
//   myroutine(); // may throw three types of exceptions
// } catch (e) {
// }   
 
  /* work before the function is called */
//   try {
//     var returnValue = originalFunction.call(this, a, b, c);
//     /* work after the function is called */
//     return returnValue;
//   }
//   catch (e) {
//     /* work in case there is an error */
//     throw e;
//   }

// https://gist.github.com/harrylove/1230566/d064e5c216384d3846f73ed555e9899be02e8f98#gistcomment-2884621
// https://stackoverflow.com/a/326693
function replaceMarkdown(regexp, callback) {
    
  // console.log(typeof callback)  

  var fixedCallbackMethod = false;
 
  switch (typeof callback) {
      case 'string':
          fixedCallbackMethod = callback;
          break;

      case 'undefined':
          console.log("ERRROROROR HERE!!!!")
          break;  

      default:
          fixedCallbackMethod = callback.bind(this)
          break;
  }

  this.content = this.content.replace(regexp, fixedCallbackMethod);
}

// i think this method would be broken now, because we cant play with "this."
// @TODO find out if we really using this method or not?
function replaceMarkdownPreviewText() {
  const config = {
    content: this.content.trim(),
  };

  this.errors.previewText = true;

  this.content = this.content.replace(
        REGEXP_PREVIEW_TEXT, 
        () => this.previewText
    );
}

export {
  replaceMarkdown,
  replaceMarkdownPreviewText
};
