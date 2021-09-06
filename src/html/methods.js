// @TODO both layouts things can be moved out from importing it here.
const {
  // TODO: finish and fix this thing. it was done by Serge quickly,
  // and ruined a lot of our logic
  fullTemplate, 
  
  fullTemplateOLD
} = require('atherdon-newsletter-js-layouts');
  
const { 
  write,

  checkWarnings,
  checkHtml, 
  printMessage
} = require('markup-generator');

const {
  generateTemplateName,
  FULL_SOURCE,
  CONTENT_SOURCE, 
} = require('./utils');

const {
  parse, 
  parseFullTHing,
} = require('./html/parseHTML');

const MESSAGE_HTML_CONTENT_ONLY = 'The content has been parsed successfully';
const MESSAGE_HTML_FULL_TEMPLATE = 'The full-template has been parsed successfully';
const MESSAGE_HTML_FULL_TEMPLATE2 = 'The full-template has been parsed successfully2';

function generateFullTemplate2() {
  const { content, warnings, previewText } = parseFullTHing({ source: FULL_SOURCE });

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
function generateContentOnly() {
  const { content, warnings, previewText } = parse(CONTENT_SOURCE);

  // ***
  checkWarnings(warnings);


  const fileName = generateTemplateName('content');

  write(fileName, content);

  const message = 'The content has been parsed successfully';
  printMessage(message, 'green2');
}


module.exports = {

    MESSAGE_HTML_CONTENT_ONLY,
    MESSAGE_HTML_FULL_TEMPLATE,
    MESSAGE_HTML_FULL_TEMPLATE2

}