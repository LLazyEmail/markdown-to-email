import { configureReplacer } from '../domain/react';

// import { generateReactContent, generateReactFullTemplate } from './methods';

// // TODO replace with separated parse method
import parse from '../domain/parse';

function parseReactFullTemplate(source) {
  // console.log(source);

  return parse(source, configureReplacer);
}

export {
  //   generateReactContent,
  //   generateReactFullTemplate,
  parse,
  parseReactFullTemplate,
};
