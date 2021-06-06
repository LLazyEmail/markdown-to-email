const chalk = require('chalk');
const { forEach } = require('lodash');
const layouts = require('atherdon-newsletter-js-layouts');
const reactLayouts = require('atherdon-newsletter-react');



const {
  write,
  readFile,
  displayCLIErrors,
  checkWarnings,
  writeReactComponent,
  FULL_SOURCE,
  CONTENT_SOURCE,
  checkHtml
} = require('./utils');


const { parse, parseFullTHing } = require('./parse');

const {
  parseMDReact,
  parseMDReactFullThing,
} = require('./parserMDReact/parseMDReact');


switch (process.env.PARSE) {
  case 'full':
    generateFullTemplate();
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

function generateFullTemplate() {
  const parsedContent = parseFullTHing({ source: FULL_SOURCE });
  
  checkWarnings(parsedContent.warnings);

  const fileName = `full-template${Date.now()}.html`;

  checkHtml(parsedContent.content);
//   @TODO HERE WE CAN APPLY THAT PREVIEWTEXT IS EMPTY INSIDE
    // console.log(parsedContent);

    // throw new Error("my error message");


  const fullContent = layouts.fullTemplate(parsedContent.content);

    // throw new Error("my error message");


  write(fileName, fullContent);

  const message = 'The full-template has been parsed successfully';

  console.log(chalk.green.bold(message));
}

function generateReactContent() {

  const parsedContent = parseMDReact(CONTENT_SOURCE);
  // console.log("parsedContent", parsedContent);
  checkWarnings(parsedContent.warnings);
  const fileName = `Content${Date.now()}.js`;

  writeReactComponent(fileName, parsedContent.content);

  const message = 'The Content has been parsed successfully';
  console.log(chalk.green.bold(message));
}

function generateReactFullTemplate() {

  const parsedContent = parseMDReactFullThing({ source: FULL_SOURCE });
  checkWarnings(parsedContent.warnings);

  const fileName = `FullTemplate${Date.now()}.js`;
  const fullContent = reactLayouts.reactFullTemplate(parsedContent.content);

  write(fileName, fullContent);

  const message = 'The FullTemplate has been parsed successfully';

  console.log(chalk.green.bold(message));
}

// this method is depricated.
function generateContentOnly() {
    
  const parsedContent = parse(CONTENT_SOURCE);
  checkWarnings(parsedContent.warnings);

  const fileName = `content${Date.now()}.html`;
  write(fileName, parsedContent.content);

  const message = 'The content has been parsed successfully';

  console.log(chalk.green.bold(message));
}

module.exports = {
  generateContentOnly,
  generateFullTemplate,
};