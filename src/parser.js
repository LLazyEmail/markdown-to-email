const chalk = require('chalk');
const { forEach } = require('lodash');

// @TODO both layouts things can be moved out from importing it here.
const layouts = require('atherdon-newsletter-js-layouts');
const reactLayouts = require('atherdon-newsletter-react');

const {
  // TODO: finish and fix this thing. it was done by Serge quickly, 
  // and ruined a lot of our logic
  tempFullTemplate, 
  fullTemplate 
} = require('./temp-full-template');

const {
  write,
  readFile,
  
  writeReactComponent,
  FULL_SOURCE,
  CONTENT_SOURCE,
  
  MESSAGE_HTML_CONTENT_ONLY,
MESSAGE_HTML_FULL_TEMPLATE,
MESSAGE_HTML_FULL_TEMPLATE2,

MESSAGE_REACT_FULL_TEMPLATE,
MESSAGE_REACT_CONTENT

  
} = require('./utils');

const {
  displayCLIErrors,
  checkWarnings,
  checkHtml, printMessage 
} = require('./command-line-methods');


const { 
  parse, parseFullTHing 
} = require('./parse');


const {
  parseMDReact,
  parseMDReactFullThing,
} = require('./parserMDReact/parseMDReact');


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

  const fileName = generateTemplateName(`full-template-2`);


  // ***
  checkHtml(content);

  const fullContent = fullTemplate(content, previewText);
  write(fileName, fullContent);

  const message = 'The full-template has been parsed successfully2';
  printMessage(message, 'green2'); 
  
}


function generateFullTemplate() {
  const { content, warnings, previewText } = parseFullTHing({ source: FULL_SOURCE });

  
  // ***
  checkWarnings(warnings);

  
  const fileName = generateTemplateName(`full-template`);

  // ***
  checkHtml(content);
  //   @TODO HERE WE CAN APPLY THAT PREVIEWTEXT IS EMPTY INSIDE
  // console.log(parsedContent);

  // throw new Error("my error message");





  const fullContent = layouts.fullTemplate(content);

  // throw new Error("my error message");


  write(fileName, fullContent);

  const message = 'The full-template has been parsed successfully';
  printMessage(message, 'green2'); 
  
}

function generateReactContent() {

  const { content, warnings, previewText } = parseMDReact(CONTENT_SOURCE);
  // console.log("parsedContent", { content, warnings, previewText });
  
  
  // ***
  checkWarnings(warnings);

  const fileName = generateTemplateName(`Content`, 'js');


  writeReactComponent(fileName, content);

  const message = 'The Content has been parsed successfully';
  printMessage(message, 'green2'); 
  
}

function generateReactFullTemplate() {

  const { content, warnings, previewText } = parseMDReactFullThing({ source: FULL_SOURCE });
  
  // ***
  checkWarnings(warnings);

  
const fileName = generateTemplateName(`FullTemplate`, 'js);



  const fullContent = reactLayouts.reactFullTemplate(content);

  write(fileName, fullContent);

  
  const message = 'The FullTemplate has been parsed successfully';
  printMessage(message, 'green2'); 
  
}



// this method is depricated.
// we will remove export of it at some point.
function generateContentOnly() {

  const parsedContent = parse(CONTENT_SOURCE);
  
  
  const { content, warnings, previewText } = parsedContent;

  // ***
  checkWarnings(warnings);

  const fileName = `content${Date.now()}.html`;
  write(fileName, parsedContent.content);

  
  const message = 'The content has been parsed successfully';
  printMessage(message, 'green2'); 
  
}

module.exports = {
  generateContentOnly,
  generateFullTemplate,
};
