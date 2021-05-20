import os from 'os';
// const { forEach } = require('lodash');

import layouts from 'atherdon-newsletter-js-layouts';
import reactLayouts from 'atherdon-newsletter-react';


const platform = os.platform();
const newLine = platform === 'win32' ? '\r\n' : '\n';


function replaceHTMLWrapper(wrapperName, config, folder = 'typography') {

  // this part will be updated very soon
  let wrapper = layouts[folder][wrapperName];
  //@TODO replace with lodash
  Object.keys(config).forEach((name) => {
    wrapper = wrapper.replace(new RegExp(`{${name}}`, 'g'), config[name]);
  });

  return wrapper;
}



function replaceReactWrapper(wrapperName, config, folder = 'typography') {
    
  // console.log(reactLayouts.Typography.strong);
  // console.log("name", config);
  // this part will be updated very soon
  let wrapper = reactLayouts[folder][wrapperName];
  //@TODO replace with lodash
  Object.keys(config).forEach((name) => {
    wrapper = wrapper.replace(new RegExp(`{${name}}`, 'g'), config[name]);
  });

  return wrapper;
}


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
    
    console.log('helpsers- replace markdown method')
  console.log(typeof callback)  
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

  this.content = this.content.replace(regexp, () => this.previewText);
}


export {
    newLine,

    replaceMarkdown,
    replaceMarkdownPreviewText,

    replaceReactWrapper,
    replaceHTMLWrapper,
};
