// TODO explore other ways of doing replacing thing
// https://www.npmjs.com/package/string-replace-to-array
// https://www.npmjs.com/package/batch-replace
// https://www.npmjs.com/package/pupa

import _ from 'lodash';
// TODO fix this
import { mainObject } from '../index';

import debuggingReplacer from './debugging';

// import mainObject from

// @TODO replace the name of this method
function prepOurCallback(callbackName, debug = false) {
  if (!callbackName) {
    throw new Error(`name of ${callbackName} is undefined or empty`);
  }

  const settings = mainObject[callbackName];
  // console.log(settings)

  if (debug) {
    //--------------
    if (!settings.literal) {
      console.log(callbackName, settings.constant);
      console.log('-----------------');
    }
    //---------------
  }

  return settings;
}

const simple_debug = (name, params) => {
  const { callback_name, singleElement } = params;
  if (callback_name === name) {
    console.log(singleElement);
  }
};

// Should be working like this this.replaceMDBinded("previewText");
// TODO add later an ability to pass debug = true from the top of the configuration,
// i.e. configureReplacer

// plus i wanna have more control for debugging stuff
//----------------------------
function replaceMarkdown(callback_name) {
  const singleElement = prepOurCallback(callback_name, false);

  // let debug_params = {callback_name, singleElement}

  // --------- comment for debugging purposes
  // // --- You can comment this when you debugging our wrapper
  const _replacer = singleElement.replacer.bind(this);
  this.content = this.content.replace(singleElement.constant, _replacer);
  // TODO let's handle a case, when this.content.replace( regex, undefined)
  // ------------- end
}

class replaceMarkdownDebug {
  constructor(callback_name) {
    const singleElement = prepOurCallback(callback_name, false);

    if (debuggingReplacer(callback_name)) {
      console.log(callback_name);

      const _replacer = singleElement.replacer.bind(this);

      console.log(replacedString);

      // TODO another case why i dont like this solution
      // with string.replace - when you forget to return something it's hard to catch
      this.content = this.content.replace(singleElement.constant, _replacer);
    }
    return '';
  }
}

export { replaceMarkdown, replaceMarkdownDebug };
