const {
  generateContentOnly, // depricated method
  generateFullTemplate2,
  generateFullTemplate,
} = require('./html/methods');

const {
  generateReactContent,
  generateReactFullTemplate,
} = require('./react/methods');

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
