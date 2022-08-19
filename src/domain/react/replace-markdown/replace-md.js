// import debuggingReplacer from './debugging';
// import { replaceMarkdown } from '../../replace-class';

const prepOurCallback = (name, configurationMap) => {
  if (!name) {
    throw new Error(`name of ${name} is undefined or empty`);
  }

  const settings = configurationMap[name];

  if (!settings) {
    throw new Error(`object by name ${name} not found`);
  }

  return settings;
};

// if (debug) {
//   //--------------
//   if (!settings.literal) {
//     console.log(callbackName, settings.constant);
//     console.log('-----------------');
//   }
//   //---------------
// }
// TODO we finally can replaceMarkdown()*** for this one.

export function replaceMarkdownReact(callback_name) {
  // const debugging = new replaceMarkdownDebug(callback_name);

  const singleElement = prepOurCallback(callback_name, this.configurationMap);

  // --------- comment for debugging purposes
  // // --- You can comment this when you debugging our wrapper
  // const _replacer = singleElement.replacer.bind(this);
  // this.content = this.content.replace(singleElement.constant, _replacer);

  const _replacer = singleElement.replacer.bind(this);
  this.content = this.content.replace(singleElement.constant, _replacer);

  //   // -------------- Uncomment for debugging reasons
  // if (debuggingReplacer(callback_name)) {
  //   // console.log(callback_name);

  //   //     console.log(replacedString);

  //   //     // TODO another case why i dont like this solution
  //   //     // with string.replace - when you forget to return something it's hard to catch
  // }
  // return '';
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
