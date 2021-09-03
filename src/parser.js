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
  
  
  displayCLIErrors,
  checkWarnings,
  checkHtml,
  
  writeReactComponent,
  FULL_SOURCE,
  CONTENT_SOURCE
  
} = require('./utils');


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

function generateTemplateName = (suffix, ext = 'html') => {

  return "${suffix}-${Date.now()}.${ext}";
}

function generateFullTemplate2() {
  const parsedContent = parseFullTHing({ source: FULL_SOURCE });
  
  const { content, warnings, previewText } = parsedContent;

  // ***
  checkWarnings(warnings);

  const fileName = generateTemplateName(`full-template-2`);


  // ***
  checkHtml(content);

  const fullContent = fullTemplate(content, previewText);
  write(fileName, fullContent);

  const message = 'The full-template has been parsed successfully2';

  console.log(chalk.green.bold(message));
}


function generateFullTemplate() {
  const parsedContent = parseFullTHing({ source: FULL_SOURCE });

  
  const { content, warnings, previewText } = parsedContent;

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

  console.log(chalk.green.bold(message));
}

function generateReactContent() {

  const parsedContent = parseMDReact(CONTENT_SOURCE);
  // console.log("parsedContent", parsedContent);
  
  
  const { content, warnings, previewText } = parsedContent;

  // ***
  checkWarnings(parsedContent.warnings);

  const fileName = generateTemplateName(`Content`, 'js');


  writeReactComponent(fileName, content);

  const message = 'The Content has been parsed successfully';
  console.log(chalk.green.bold(message));
  
}

function generateReactFullTemplate() {

  const parsedContent = parseMDReactFullThing({ source: FULL_SOURCE });
  
  
  const { content, warnings, previewText } = parsedContent;

  // ***
  checkWarnings(warnings);

  const fileName = `FullTemplate${Date.now()}.js`;



  const fullContent = reactLayouts.reactFullTemplate(content);

  write(fileName, fullContent);

  const message = 'The FullTemplate has been parsed successfully';

  console.log(chalk.green.bold(message));
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

  console.log(chalk.green.bold(message));
}

module.exports = {
  generateContentOnly,
  generateFullTemplate,
};
