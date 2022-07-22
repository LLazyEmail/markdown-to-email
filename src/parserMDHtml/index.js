// TODO: something wrong with newsletter-constants module
import configureReplacer from '../domain/replace-class/configuration';

import parse from '../domain/parse';

import {
  generateFullTemplate2,
  // generateFullTemplate,
  // generateContentOnly,
} from './methods';

function parseFullTHing({ source }) {
  return parse(source, configureReplacer);
}

export {
  // generateContentOnly, // depricated method
  generateFullTemplate2,
  parseFullTHing,
  parse,
  // generateFullTemplate,
};
