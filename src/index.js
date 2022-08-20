import { isFolderExists } from './domain/write';

import { generateReactFullTemplate } from './templates/HackernoonTemplate/react/generateReactFullTemplate';
import { generateHtmlFullTemplateHackernoon } from './templates/HackernoonTemplate/html/generateHtmlFullTemplate';
import { generateHtmlFullTemplateRecipes } from './templates/RecipesTemplate/html/generateHtmlFullTemplate';
//-------------------
// @TODO add path package, in order to make it work PERFECTLY
const FULL_SOURCE = 'source/source.md';

isFolderExists('./generated');
isFolderExists('./tests/_generated');

console.log('Mode', process.env.PARSE);

const modeMap = {
  full: () => generateHtmlFullTemplateHackernoon(FULL_SOURCE),
  reactFull: () => generateReactFullTemplate(FULL_SOURCE),
  recipesFull: () =>
    generateHtmlFullTemplateRecipes('source/recipes/source-nmtg.md'),
};

modeMap[process.env.PARSE ?? 'full']();
