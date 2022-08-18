import { isFolderExists } from './domain/write';

import { generateReactFullTemplate } from './templates/HackernoonTemplate/react/generateReactFullTemplate';
import { generateHtmlFullTemplateHackernoon } from './templates/HackernoonTemplate/html/generateHtmlFullTemplate';
//-------------------
// @TODO add path package, in order to make it work PERFECTLY
const FULL_SOURCE = 'source/source.md';

isFolderExists('./generated');
isFolderExists('./tests/_generated');

console.log('Mode', process.env.PARSE);

// TODO if I comment any of those cases - i wouldnt get any warning or something in our command line.

const modeMap = {
  full: () => generateHtmlFullTemplateHackernoon(FULL_SOURCE),
  // reactContentOnly: () => generateReactContent(CONTENT_SOURCE),
  reactFull: () => generateReactFullTemplate(FULL_SOURCE),
};

modeMap[process.env.PARSE ?? 'full']();
