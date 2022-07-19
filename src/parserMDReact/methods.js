import reactLayouts from '../templates/NewsletterReactTemplate';

import {
  // writeHTML,
  // checkWarnings,
  printMessage,
  // generateTemplateName,
} from '../helper';

import {
  writeHTML,
  generateTemplateName,
  // isFolderExists
} from '../domain/write';

import {
  // parseMDReact,
  parse
  // parseMDReactFullThing
} from './index';

//-----------------
// TODO add more messages here, and finally replace messages in our methods
const MESSAGE_REACT_FULL_TEMPLATE =
  'The FullTemplate has been parsed successfully';
const MESSAGE_REACT_CONTENT = 'The Content has been parsed successfully';
//----------------
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

// eslint-disable-next-line default-param-last
function writeReactComponent(fileName, content, dir = 'generated', message) {
  const result = reactComponentReplace(content);
  writeHTML(fileName, result, dir, message);
}

function generateReactContent(sourceFile) {
  const { content, warnings } = parse(sourceFile);
  // console.log("parsedContent", { content, warnings, previewText });

  // ***
  // checkWarnings(warnings);
  // verification(warnings);

  const fileName = generateTemplateName('Content', 'js');
  writeReactComponent(fileName, content);

  const message = 'The Content has been parsed successfully';
  printMessage(message, 'green2');
}

function generateReactFullTemplate(sourceFile) {
  const {
    content,
    warnings,
    // previewText
  } = parse(sourceFile);

  // ***
  // checkWarnings(warnings);
  // verification(warnings);

  const fullContent = reactLayouts.reactFullTemplate(content);

  const fileName = generateTemplateName('FullTemplate', 'js');
  writeHTML(fileName, fullContent);

  const message = 'The FullTemplate has been parsed successfully';
  printMessage(message, 'green2');
}

export {
  reactComponent,
  reactComponentReplace,
  //-------------
  writeReactComponent,
  //-------------
  generateReactContent,
  generateReactFullTemplate,

  //-------------
  MESSAGE_REACT_FULL_TEMPLATE,
  MESSAGE_REACT_CONTENT,
};
