// TODO explore other ways of doing replacing thing
// https://www.npmjs.com/package/string-replace-to-array
// https://www.npmjs.com/package/batch-replace
// https://www.npmjs.com/package/pupa

import _ from 'lodash';
import mapObject from './pre-replace-objects';

// @TODO replace the name of this method
function prepOurCallback(callback_name, debug = false) {
  if (!callback_name) {
    throw new Error(`name of ${callback_name} is undefined or empty`);
  }

  const settings = mapObject[callback_name];
  // console.log(settings)
  if(debug){
    if(!settings.literal){
      console.log(callback_name, settings.constant);
      console.log('-----------------');
    }
  }
  

  return settings;
}

// When you use this function you can specify which types of objects you want to debug
function debuggingReplacer(name) {
  const namesArr = [
    // 'sponsorship',
    // 'paragraph',
    //  'link',
    //-------
     'header', // not working
       'title', 
       'subtitle', 
       'heading',

    // ----------------
    // 'strong',
    // 'memes',
    // 'br',
    'separator',
    // 'previewText',
    // 'italic',

    // 'olList'
    // 'ulList'

    // 'image'

  ];
  return namesArr.includes(name);
}




// Should be working like this this.replaceMDBinded("previewText");
//----------------------------
function replaceMarkdown(callback_name) {

  const fromMap = prepOurCallback(callback_name);

  // TODO I dont like names fromMap & nameOfCallback & forReplacer
  // fromMap.replacer is a single regex value
  // forReplacer is a new sting that will be applied

  // console.log(fromMap.constant);
  // console.log(fromMap.replacer);

  // console.log(fromMap.literal);

  //--------- comment for debugging purposes
  // const forReplacer = fromMap.replacer.bind(this);
  //--- You can comment this when you debugging our wrapper
  // this.content = this.content.replace(
  //   fromMap.constant, 
  //   forReplacer
  // );

  //-------------- Uncomment for debugging reasons
  if (debuggingReplacer(callback_name)) {

    // console.log(callback_name);

    const forReplacer = fromMap.replacer.bind(this);

    this.content = this.content.replace(
      fromMap.constant, 
      forReplacer
    );

    
  }  
  return '';
  //--------------
  //--------------

  
}


// i think this method would be broken now, because we cant play with "this."
// @TODO find out if we really using this method or not?
// function replaceMarkdownPreviewText(regexp) {
//   // const config = {
//   //   content: this.content.trim(),
//   // };

//   /*
//   this.previewText = replaceHTMLWrapper(
//         "previewText",
//         config,
//         "body"
//       );
//       console.log(this.previewText)
//  */

//   // this might now working anymore
//   this.errors.previewText = true;

//   this.content = this.content.replace(regexp, () => this.previewText);
// }

export { 
  replaceMarkdown, 
  // replaceMarkdownPreviewText 
};
