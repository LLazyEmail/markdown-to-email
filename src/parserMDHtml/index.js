// TODO: something wrong with newsletter-constants module
import configureReplacer from '../domain/replacer-class/configuration-plain'

import parse from '../domain/parse'

import {
  generateFullTemplate2,
  // generateFullTemplate,
  // generateContentOnly,
} from './methods';


function parseFullTHing(params) {
  // console.log(params);

  const { source } = params;

  return parse(source, configureReplacer);
}

export {
  // generateContentOnly, // depricated method
  generateFullTemplate2,

  parseFullTHing, parse 
  // generateFullTemplate,
  // ReactReplacer
};
