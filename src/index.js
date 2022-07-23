import { isFolderExists } from './domain/write';

// import {
//   generateReactContent,
//   generateReactFullTemplate,
// } from './parserMDReact';

import { generateFullTemplateHackernoon } from './templates/HackernoonTemplate';
//-------------------
// @TODO add path, in order to make it work PERFECTLY
const FULL_SOURCE = 'source/source.md';

isFolderExists('./generated');
isFolderExists('./tests/_generated');

console.info('MODE: ', process.env.PARSE, '');

// TODO rewrite on object
switch (process.env.PARSE) {
  case 'full':
    // generateFullTemplate();
    generateFullTemplateHackernoon(FULL_SOURCE);
    break;

  case 'reactContentOnly':
    // same as default, but with react components instead.
    // generateReactContent(CONTENT_SOURCE);
    break;

  case 'reactFull':
    // generateReactFullTemplate(FULL_SOURCE);
    break;

  default:
    // generateFullTemplate(FULL_SOURCE);
    break;
}
