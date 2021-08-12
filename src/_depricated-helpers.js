function replaceMarkdown(regexp, callback) {
    
    // console.log('helpers- replace markdown method')
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
  this.errors.previewText = true;

  this.content = this.content.replace(
        regexp, 
        () => this.previewText
    );
}


module.exports = {
  replaceMarkdown,
  replaceMarkdownPreviewText
};
