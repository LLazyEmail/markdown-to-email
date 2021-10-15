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
//
// https://gist.github.com/harrylove/1230566/d064e5c216384d3846f73ed555e9899be02e8f98#gistcomment-2884621
// https://stackoverflow.com/a/326693




function replaceMarkdown(regexp, callback) {
    
    // console.log('helpers- replace markdown method')
    // console.log(typeof callback)  





  var fixedCallbackMethod = false;

  switch (typeof callback) {
      case 'string':
          fixedCallbackMethod = callback;
          break;

      case 'undefined':
            console.log("ERRROROROR HERE!!!!");
            console.log(regexp)
            console.log(callback)
            throw new Error('catching this error');
            
          break;  

      default:
          fixedCallbackMethod = callback.bind(this)
          break;
  }


   try {
     var result = this.content.replace(regexp, fixedCallbackMethod);
     /* work after the function is called */
     this.content = result;
  
   }
   catch (e) {
     /* work in case there is an error */
    //  throw e;
     throw new Error('replace markdown ');  
   }



  // this.content = this.content.replace(regexp, fixedCallbackMethod);
}

// i think this method would be broken now, because we cant play with "this."
// @TODO find out if we really using this method or not?
function replaceMarkdownPreviewText(regexp) {
  const config = {
    content: this.content.trim(),
  };

  /*
  this.previewText = replaceHTMLWrapper(
        "previewText",
        config,
        "body"
      );
      console.log(this.previewText)
 */

      //this might now working anymore
  this.errors.previewText = true;


  
  this.content = this.content.replace(
        regexp, 
        () => this.previewText
    );
}


export {
  replaceMarkdown,
  replaceMarkdownPreviewText
};