// @TODO both layouts things can be moved out from importing it here.


// import {  
//   fullTemplate,

//   fullTemplateOLD, 
// } from 'atherdon-newsletter-js-layouts';

// TODO: finish and fix this thing. it was done by Serge quickly,
  // and ruined a lot of our logic
import htmlLayouts from 'atherdon-newsletter-js-layouts';

console.log(htmlLayouts); 

import {
  writeHTML,

  checkWarnings,
  checkHtml,
  printMessage,
  generateTemplateName,
} from 'markup-generator';

import {
  parse,
  parseFullTHing,
} from './parse.js';

const MESSAGE_HTML_CONTENT_ONLY = 'The content has been parsed successfully';
const MESSAGE_HTML_FULL_TEMPLATE = 'The full-template has been parsed successfully';
const MESSAGE_HTML_FULL_TEMPLATE2 = 'The full-template has been parsed successfully2';

const { fullTemplate, fullTemplateOLD } = htmlLayouts;

function generateFullTemplate2(sourceFile) {
  const { content, warnings, previewText } = parseFullTHing({ source: sourceFile });

  // ***
  checkWarnings(warnings);

  // ***
  checkHtml(content);

  //   @TODO HERE WE CAN APPLY THAT PREVIEWTEXT IS EMPTY INSIDE
  // console.log(content);

  // throw new Error("my error message");

  const fullContent = fullTemplate({ content, previewText });

  const fileName = generateTemplateName('full-template-2');

  write(fileName, fullContent);

  const message = 'The full-template has been parsed successfully2';
  printMessage(message, 'green2');
}

function generateFullTemplate() {
  // same as from top

  const fullContent = fullTemplateOLD({ content });

  const fileName = generateTemplateName('full-template');

  const message = 'The full-template has been parsed successfully';
  printMessage(message, 'green2');
}


// this method is depricated.
// we will remove export of it at some point.
const generateContentOnly = (sourceFile) =>  {

  const { content, warnings, previewText } = parse(sourceFile);

  // ***
  checkWarnings(warnings);

  const fileName = generateTemplateName('content');

  write(fileName, content);

  const message = 'The content has been parsed successfully';
  printMessage(message, 'green2');

}

// function generateFullTemplate(sourceFile) {
//   // same as from top

//   const fullContent = layouts.fullTemplate(content);
//   const fileName = generateTemplateName('full-template');
//   const message = 'The full-template has been parsed successfully';
//   printMessage(message, 'green2');
// }



export {
  // generateContentOnly,

  generateFullTemplate2,
  // generateFullTemplate,
  

  MESSAGE_HTML_CONTENT_ONLY,
  MESSAGE_HTML_FULL_TEMPLATE,
  MESSAGE_HTML_FULL_TEMPLATE2,

};
