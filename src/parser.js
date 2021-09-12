// @TODO both layouts things can be moved out from importing it here.
// const {
//   // TODO: finish and fix this thing. it was done by Serge quickly,
//   // and ruined a lot of our logic
//   fullTemplate, 
  
//   fullTemplateOLD
// } = require('atherdon-newsletter-js-layouts');



// const {
//   generateTemplateName,
//   FULL_SOURCE,
//   CONTENT_SOURCE, 
// } = require('./utils');

const {
  
} = require('./');

const {
  generateReactContent,
  generateReactFullTemplate
} = require('./react/methods')

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











module.exports = {
  generateContentOnly,
  generateFullTemplate,
};
