/* eslint-disable */
import AbstractReplace from './abstractClass';

import { replaceMarkdown } from '../replace-markdown/html/replace-md';

// const methodsList = [
//     // ---------------
//     { name: '', type: '', arg: '' },
//     { name: '', type: '', arg: '' },
//     { name: '', type: '', arg: '' },
//     { name: '', type: '', arg: '' },
// ];

const methodsList = [
  // TODO working not ideally, because we have headings & subtitles,
  // so it's confusing a little bit
  { name: 'header', type: 'template', arg: 'header' },
  { name: 'subtitle', type: 'typography', arg: 'header' },
  { name: 'title', type: 'typography', arg: 'header' },
  // ------------
  { name: 'strong', type: 'replace', arg: 'strong' },
  { name: 'em', type: 'replace', arg: 'italic' },
  // TODO finish this case
  { name: 'italicAsterix', type: 'replace', arg: 'italic_asterix' },
  // ------------
  { name: 'image', type: 'replace', arg: 'image' },
  { name: 'link', type: 'replace', arg: 'link' },
  { name: 'del', type: 'replace', arg: 'del' },
  { name: 'q', type: 'replace', arg: 'q' },
  { name: 'code', type: 'replace', arg: 'code' },
  { name: 'ul', type: 'replace', arg: 'ulList' },
  { name: 'ol', type: 'replace', arg: 'olList' },
  { name: 'blockquote', type: 'replace', arg: 'blockquote' },
  { name: 'hr', type: 'replace', arg: 'hr' },
  { name: 'paragraph', type: 'replace', arg: 'paragraph' },
  { name: 'br', type: 'replace', arg: 'br' },
  // ------------
  // those methods might get replaced with front-matter
  { name: 'previewText', type: 'miscellaneous', arg: 'previewText' },
  { name: 'sponsorship', type: 'miscellaneous', arg: 'sponsorship' },
  { name: 'memes', type: 'miscellaneous', arg: 'memes' },
  { name: 'separator', type: 'miscellaneous', arg: 'separator' },
  // ---------------
  // TODO hiding for now, let's fix it after our release
  // { name: 'emptyUl', type: '', arg: 'REGEXP_EMPTY_UL' },
  // { name: 'emptyOl', type: '', arg: 'REGEXP_EMPTY_OL' },
  // { name: 'comments', type: '', arg: '' },
  // { name: 'emptyBlockquote', type: '', arg: 'REGEXP_EMPTY_BLOCKQUOTE' },
];

/**
 * Updated version of our replacer class
 *
 * @class ReplacerClassTwo
 * @extends {AbstractReplace}
 */
class ReplacerClassTwo extends AbstractReplace {
  configure(state) {
    this.replaceMDBinded = replaceMarkdown.bind(state);

    this.addMethods(methodsList);
    this.runMethods();
    // Call miscellaneous, template, and typography methods
    // this.miscellaneous();
    // this.template();
    // this.typography();
    // this.addMethods(methodsList);
  }
  // Define miscellaneous, template, and typography methods as abstract methods
  //   miscellaneous() {
  //     throw new Error("Method 'miscellaneous' must be implemented.");
  //   }
  //   template() {
  //     throw new Error("Method 'template' must be implemented.");
  //   }
  //   typography() {
  //     throw new Error("Method 'typography' must be implemented.");
  //   }
  // Add a method to add more methods to the class
  // addMethods(newMethods) {
  //   this.methods.push(...newMethods);
  // }

  // Call methods added through addMethods
  // runMethods() {
  //   for (const method of this.methods) {
  //     this[method]();
  //   }
  // }
}

export default ReplacerClassTwo;
