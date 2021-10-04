const {
  // generateContentOnly, // depricated method
  generateFullTemplate2,
  // generateFullTemplate,
} = require('atherdon-newsletter-html-replacer');

const {
  generateReactContent,
  generateReactFullTemplate,
} = require('atherdon-newsletter-react-replacer');


const {
    FULL_SOURCE,
    CONTENT_SOURCE
} = require ('./utils');

switch (process.env.PARSE) {
  case 'full':

    // generateFullTemplate();
    generateFullTemplate2(FULL_SOURCE);
    break;

  case 'reactContentOnly':
    // same as default, but with react components instead.
    generateReactContent(CONTENT_SOURCE);
    break;

  case 'reactFull':
    generateReactFullTemplate(FULL_SOURCE);
    break;

  default:
    generateFullTemplate(FULL_SOURCE);
    break;
}

module.exports = {
  // generateContentOnly,
  generateFullTemplate,
};
