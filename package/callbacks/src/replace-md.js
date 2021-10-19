// TODO explore other ways of doing replacing thing
// https://www.npmjs.com/package/string-replace-to-array
// https://www.npmjs.com/package/batch-replace
// https://www.npmjs.com/package/pupa

function replaceMarkdownNew(options){
    const {regexp, callback} = options;

    try {
        
        if !(regexp) throw new Error('regular expression is blank');    
        if !(callback) throw new Error('no callback presented');    
        
        // ... add more here later
        
        
    } catch(err) {
        // we need to test how it actually work
        var caller_line = err.stack.split("\n")[4];
        var index = caller_line.indexOf("at ");
        var clean = caller_line.slice(index+2, caller_line.length);
        
        throw err;
    }
    
}

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
