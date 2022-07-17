import { mainObject, prepOurCallback }  from '../index';
import debuggingReplacer from './debugging';

// // TODO replace the name of this method
// function prepOurCallback(callback_name) {
//   if (!callback_name) {
//     throw new Error(`name of ${callback_name} is undefined or empty`);
//   }

//   const settings = mainObject[callback_name];
//   // console.log(settings)
//   return settings;
// }

function replaceMarkdownReact(callback_name) {

    const singleElement = prepOurCallback(callback_name, false);
  // --------- comment for debugging purposes
  // // --- You can comment this when you debugging our wrapper
  const _replacer = singleElement.replacer.bind(this);
  this.content = this.content.replace(singleElement.constant, _replacer);

//   // -------------- Uncomment for debugging reasons
//   // if (debuggingReplacer(callback_name)) {
//   //   console.log(callback_name);

//   //   this.content = this.content.replace(
//   //     fromMap.constant,
//   //     forReplacer
//   //   );
//   // }
//   // return '';
//   //-----------------------
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
//   //--------------
// }

export { replaceMarkdownReact };
