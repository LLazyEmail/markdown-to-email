// TODO explore other ways of doing replacing thing
// https://www.npmjs.com/package/string-replace-to-array
// https://www.npmjs.com/package/batch-replace
// https://www.npmjs.com/package/pupa

import _ from 'lodash';
import mapObject from './pre-replace-objects';

// @TODO replace the name of this method
function prepOurCallback(callback_name) {
  if (!callback_name) {
    throw new Error(`name of ${callback_name} is undefined or empty`);
  }

  const settings = mapObject[callback_name];
//console.log(settings)
  return settings;
}

function debuggingReplacer(name){
  let namesArr = [
    'sponsorship', 
    'paragraph',
    'link'
  ];
  return namesArr.includes(name)
}



// function methodForTestingValues(){
//   // mapObject.forEach((element) => {
//   //   console.log(element.replacer);

//   // })

//   _.map(mapObject, (element) => {
//     // console.log(element)
//     // console.log(element.replacer);

    
//     //
//     // console.log('----------');
    
//   });

// }




// Should be working like this this.replaceMDBinded("previewText");
//----------------------------
function replaceMarkdown(callback_name) {

  // methodForTestingValues();

  const fromMap = prepOurCallback(callback_name);
  // @TODO I dont like  names fromMap & nameOfCallback & forReplacer
  // fromMap.replacer is a single regex value
  // forReplacer is a new sting that will be applied
  
  // console.log(fromMap.constant);
  // console.log(fromMap.replacer);
  // console.log(fromMap.literal);
 
 
  // very cool, but generates an error, so not so cool at all.
  // const forReplacer =
  //   typeof fromMap.replacer === 'string'
  //     ? fromMap.replacer
  //     : fromMap.replacer.bind(this);

  
  // TO DEBUG forReplacer I DONT THINK IT"S WORKING CORRECTLY....
  const forReplacer = fromMap.replacer.bind(this);

  

  // console.log(fromMap.replacer);    
  // console.log(forReplacer);
  // console.log('------');

  
  // console.log(nameOfCallback);


  if(debuggingReplacer(callback_name)){
    console.log(callback_name)
    this.content = this.content.replace(fromMap.constant, forReplacer);
  }

  return '';
  // this.content = this.content.replace(fromMap.replacer, forReplacer);
 
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
