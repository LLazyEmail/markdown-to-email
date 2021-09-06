const generateTemplateName = (suffix, ext = 'html') => `${suffix}-${Date.now()}.${ext}`;

// @TODO add path, in order to make it work PERFECTLY
const FULL_SOURCE = 'source/source.md';

// I left this variable here just for depricated methods. it's time to use full-template at all places
const CONTENT_SOURCE = 'source/source.md';

module.exports = {

  FULL_SOURCE,
  CONTENT_SOURCE,
  generateTemplateName,
};
