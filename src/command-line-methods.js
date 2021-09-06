const { 
  
  displayCLIErrors,
  checkErrors,
  checkWarnings,
  checkHtml,

  printMessage,
  stateInit
 } = require('markup-generator');

const MESSAGE_HTML_CONTENT_ONLY = 'The content has been parsed successfully';
const MESSAGE_HTML_FULL_TEMPLATE = 'The full-template has been parsed successfully';
const MESSAGE_HTML_FULL_TEMPLATE2 = 'The full-template has been parsed successfully2';

const MESSAGE_REACT_FULL_TEMPLATE = 'The FullTemplate has been parsed successfully';
const MESSAGE_REACT_CONTENT = 'The Content has been parsed successfully';

module.exports = {
  displayCLIErrors,
  checkErrors,
  checkWarnings,
  checkHtml,

  printMessage,
  stateInit,

  MESSAGE_HTML_CONTENT_ONLY,
  MESSAGE_HTML_FULL_TEMPLATE,
  MESSAGE_HTML_FULL_TEMPLATE2,

  MESSAGE_REACT_FULL_TEMPLATE,
  MESSAGE_REACT_CONTENT,
};
