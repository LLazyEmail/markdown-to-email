// TODO explore other ways of doing replacing thing
// https://www.npmjs.com/package/string-replace-to-array
// https://www.npmjs.com/package/batch-replace
// https://www.npmjs.com/package/pupa

import _ from 'lodash';
// TODO fix this
import { mainObject } from '../index';

// import mainObject from

// @TODO replace the name of this method
function prepOurCallback(callback_name, debug = false) {

  
  if (!callback_name) {
    throw new Error(`name of ${callback_name} is undefined or empty`);
  }

  const settings = mainObject[callback_name];
  // console.log(settings)

  if(debug){
    //--------------
    if(!settings.literal){
      console.log(callback_name, settings.constant);
      console.log('-----------------');
    }
    //---------------
  }
  

  return settings;
}


import debuggingReplacer from './debugging';


// Should be working like this this.replaceMDBinded("previewText");
//----------------------------
function replaceMarkdown(callback_name) {

  const singleElement = prepOurCallback(callback_name, true);

  // TODO I dont like names fromMap & nameOfCallback & forReplacer
  // fromMap.replacer is a single regex value
  // forReplacer is a new sting that will be applied  

  // --------- comment for debugging purposes
  const _replacer = singleElement.replacer.bind(this);
  // --- You can comment this when you debugging our wrapper
  this.content = this.content.replace(
    singleElement.constant, 
    _replacer
  );
  //------------- end


  //-------------- Uncomment for debugging reasons
  // if (debuggingReplacer(callback_name)) {

  //   // console.log(callback_name);

  //   const _replacer = fromMap.replacer.bind(this);

  //   this.content = this.content.replace(
  //     singleElement.constant, 
  //     _replacer
  //   );

    
  // }  
  // return '';
  //--------------
  //--------------

  
}


export { 
  replaceMarkdown, 
};
