const {
  write,

  checkWarnings,

  printMessage,
  generateTemplateName,
} = require('markup-generator');

const reactLayouts = require('atherdon-newsletter-react');

const {
  FULL_SOURCE,
  CONTENT_SOURCE,
} = require('../../../../src/utils');

// const {
//     parse,
//     parseFullTHing,
//   } = require('./parseReact');

const MESSAGE_REACT_FULL_TEMPLATE = 'The FullTemplate has been parsed successfully';
const MESSAGE_REACT_CONTENT = 'The Content has been parsed successfully';

const reactComponent = `
import React from "react";

const Content = () => {
  return (
    <>
      {content}
    </>
  );
};

export default Content;
`;

function reactComponentReplace(content) {
  return reactComponent.replace(/{content}/g, content);
}



function writeReactComponent(fileName, content, dir = 'generated', message) {
  const result = reactComponentReplace(content);
  write(fileName, result, dir, message);
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

module.exports = {

  reactComponent,
  reactComponentReplace,
  writeReactComponent,

  generateReactContent,
  generateReactFullTemplate,

  MESSAGE_REACT_FULL_TEMPLATE,
  MESSAGE_REACT_CONTENT,
};
