// @TODO both layouts things can be moved out from importing it here.
const {
  // TODO: finish and fix this thing. it was done by Serge quickly,
  // and ruined a lot of our logic
  fullTemplate, 
  
  
  fullTemplateOLD
} = require('atherdon-newsletter-js-layouts');

const reactLayouts = require('atherdon-newsletter-react');

const { 
  write,

  checkWarnings,
  checkHtml, 
  printMessage
} = require('markup-generator');

const {

  writeReactComponent,
  generateTemplateName,

  FULL_SOURCE,
  CONTENT_SOURCE, 
} = require('./utils');

const {
  

  MESSAGE_HTML_CONTENT_ONLY,
  MESSAGE_HTML_FULL_TEMPLATE,
  MESSAGE_HTML_FULL_TEMPLATE2,

  MESSAGE_REACT_FULL_TEMPLATE,
  MESSAGE_REACT_CONTENT,
  
} = require('./command-line-methods');

const {
  parse, 
  parseFullTHing,
} = require('./html/parseHTML');

const {
  parseMDReact,
  parseMDReactFullThing,
} = require('./react/parseReact');



switch (process.env.PARSE) {
  case 'full':

    // generateFullTemplate();
    generateFullTemplate2();
    break;

  case 'reactContentOnly':
    // same as default, but with react components instead.
    generateReactContent();
    break;

  case 'reactFull':
    generateReactFullTemplate();
    break;

  default:
    generateFullTemplate();
    break;
}

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

function generateReactContent() {
  const { content, warnings } = parseMDReact(CONTENT_SOURCE);
  // console.log("parsedContent", { content, warnings, previewText });

  // ***
  checkWarnings(warnings);


  const fileName = generateTemplateName('Content', 'js');
  writeReactComponent(fileName, content);

  const message = 'The Content has been parsed successfully';
  printMessage(message, 'green2');
}

function generateReactFullTemplate() {
  const { content, warnings, previewText } = parseMDReactFullThing({ source: FULL_SOURCE });

  // ***
  checkWarnings(warnings);

  const fullContent = reactLayouts.reactFullTemplate(content);


  const fileName = generateTemplateName('FullTemplate', 'js');
  write(fileName, fullContent);

  const message = 'The FullTemplate has been parsed successfully';
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
  generateContentOnly,
  generateFullTemplate,
};
