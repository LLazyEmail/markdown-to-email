const {
  // generateContentOnly, // depricated method
  generateFullTemplate2,
  // generateFullTemplate,
} = require('atherdon-newsletter-html-replacer');

const {
  generateReactContent,
  generateReactFullTemplate,
} = require('atherdon-newsletter-react-replacer');

// @TODO add path, in order to make it work PERFECTLY
const FULL_SOURCE = 'source/source.md';

// I left this variable here just for depricated methods. it's time to use full-template at all places
const CONTENT_SOURCE = 'source/source.md';



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
    // generateFullTemplate(FULL_SOURCE);
    break;
}

// module.exports = {
//   // generateContentOnly,
//   // generateFullTemplate,
// };
