import { isFolderExists } from './domain/write';

import { generateReactFullTemplate } from './templates/NewsletterReactTemplate';
import { generateFullTemplateHackernoon } from './templates/HackernoonTemplate';
//-------------------
// @TODO add path package, in order to make it work PERFECTLY
const FULL_SOURCE = 'source/source.md';

isFolderExists('./generated');
isFolderExists('./tests/_generated');

console.log('Mode', process.env.PARSE);

const modeMap = {
  full: () => generateFullTemplateHackernoon(FULL_SOURCE),
  // reactContentOnly: () => generateReactContent(CONTENT_SOURCE),
  reactFull: () => generateReactFullTemplate(FULL_SOURCE),
};

modeMap[process.env.PARSE ?? 'full']();
