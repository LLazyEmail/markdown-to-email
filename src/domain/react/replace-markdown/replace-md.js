import { mainObject, prepOurCallback } from '../index';
import debuggingReplacer from './debugging';

import { replaceMarkdown } from '../../replace-class/'

// TODO we finally can replaceMarkdown()*** for this one.


function replaceMarkdownReact(callback_name) {

  // it must work....
  // replaceMarkdown(callback_name);




  // const debugging = new replaceMarkdownDebug(callback_name);




  const singleElement = prepOurCallback(callback_name, false);
  // --------- comment for debugging purposes
  // // --- You can comment this when you debugging our wrapper
  // const _replacer = singleElement.replacer.bind(this);
  // this.content = this.content.replace(singleElement.constant, _replacer);

  //   // -------------- Uncomment for debugging reasons
  if (debuggingReplacer(callback_name)) {

    // console.log(callback_name);

    const _replacer = singleElement.replacer.bind(this);

//     console.log(replacedString);


//     // TODO another case why i dont like this solution
//     // with string.replace - when you forget to return something it's hard to catch
    this.content = this.content.replace(singleElement.constant, _replacer);
    
  }
  return '';
    //-----------------------
}

// function replaceMarkdownDebug(callback_name) {
//   // -------------- Uncomment for debugging reasons
//   if (debuggingReplacer(callback_name)) {

//     console.log(callback_name);

//     const _replacer = singleElement.replacer.bind(this);

//     console.log(replacedString);

//     // TODO another case why i dont like this solution
//     // with string.replace - when you forget to return something it's hard to catch
//     this.content = this.content.replace(singleElement.constant, _replacer);
//   }
//   return '';
//   //--------------
// }



// TODO mayber replace it with class? 
// class replaceMarkdownReact {
//   constructor(callback_name) {
//     const singleElement = prepOurCallback(callback_name, false);
//     // --------- comment for debugging purposes
//     // // --- You can comment this when you debugging our wrapper
//     // const _replacer = singleElement.replacer.bind(this);
//     // this.content = this.content.replace(singleElement.constant, _replacer);
//     //   // -------------- Uncomment for debugging reasons
//     if (debuggingReplacer(callback_name)) {

//       // console.log(callback_name);
//       const _replacer = singleElement.replacer.bind(this);

//       //     console.log(replacedString);
//       //     // TODO another case why i dont like this solution
//       //     // with string.replace - when you forget to return something it's hard to catch
//       this.content = this.content.replace(singleElement.constant, _replacer);

//     }
//     return '';
//     //   //-----------------------
//   }
// }


export { replaceMarkdownReact };
