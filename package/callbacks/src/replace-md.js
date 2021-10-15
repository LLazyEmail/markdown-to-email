function replaceMarkdown(regexp, callback) {
    
    // console.log('helpers- replace markdown method')
    // console.log(typeof callback)  

   try {

    var fixedCallbackMethod = false;

    if(!typeof callback){
      console.log("ERRROROROR HERE!!!!");
      console.log(regexp)
      console.log(callback)
      throw new Error('catching this error');
    }

    switch (typeof callback) {
        case 'string':
            fixedCallbackMethod = callback;
            break;
  
        default:
            fixedCallbackMethod = callback.bind(this)
            break;
    }


     var result = this.content.replace(regexp, fixedCallbackMethod);
     this.content = result;
  
   }
   catch (e) {
     /* work in case there is an error */
     throw e;
     throw new Error('replaceMarkdown method');  
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