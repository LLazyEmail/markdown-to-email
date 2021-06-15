const { main } = require('atherdon-newsletter-js-layouts');

function tempFullTemplate(content) {
  const mainn = main.replace('{content}', content);
  return `
    ${mainn}
  `
}

module.exports = tempFullTemplate;