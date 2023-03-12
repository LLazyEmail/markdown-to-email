import {
  writeHTML,
  isFolderExists,
  readSourceFile,
  generateTemplateName,
  readFrontMatter,
} from 'markup-generator';
import {
  generateHtmlFullTemplateHackernoon,
  generateReactFullTemplateHackernoon,
  generateHtmlFullTemplateRecipes,
} from './src';
import { printMessage } from './src/domain/helper-methods/cli';
import { deliver } from './src/domain/deliver/deliver';
import { MESSAGE_HTML_FULL_TEMPLATE2 } from './src/domain/deliver/deliver.constants';
import { hackernoonContent, FULL_SOURCE } from './src/domain/content-source';
// TODO add more messages here, and finally replace messages in our methods
const MESSAGE_REACT_FULL_TEMPLATE =
  'The FullTemplate has been parsed successfully';
// const MESSAGE_REACT_CONTENT = 'The Content has been parsed successfully';

//-------------------
// @TODO add path package, in order to make it work PERFECTLY
// const FULL_SOURCE = 'source/source.md';
// const RECIPES_SOURCE = 'source/recipes/source-nmtg.md';
// updated version
// const FRONT_HN_SOURCE = 'source/front-matter/03-hackernoon-source.md';
// const FRONT_NMTG_SOURCE = 'sourcefront-matter/05-source-weekly-menu.md';
// const front_markdown_hackernoon = readFrontMatter(FRONT_HN_SOURCE);
// const front_makrdown_nmtg = readFrontMatter(FRONT_NMTG_SOURCE);

// console.log(front_markdown_hackernoon);

// const markdown = readSourceFile(FULL_SOURCE);
const markdown = hackernoonContent;

isFolderExists('./generated');
isFolderExists('./tests/_generated');

export const modes = {
  full: () => {
    const hackernoonFullTemplate = generateHtmlFullTemplateHackernoon(markdown);

    deliver(
      hackernoonFullTemplate,
      'hackernoon-full-template',
      MESSAGE_HTML_FULL_TEMPLATE2,
    );
  },
  reactFull: () => {
    const fullContent = generateReactFullTemplateHackernoon(markdown);

    // TODO replace this three rows on deliver function
    const fileName = generateTemplateName('FullTemplate', 'js');
    writeHTML(fileName, fullContent, 'generated', '');
    printMessage(MESSAGE_REACT_FULL_TEMPLATE, 'green2');
  },
  recipesFull: () => {
    const markdownRecipes = readSourceFile(RECIPES_SOURCE);

    const recipesFullTemplate =
      generateHtmlFullTemplateRecipes(markdownRecipes);

    deliver(
      recipesFullTemplate,
      'recipes-full-template',
      MESSAGE_HTML_FULL_TEMPLATE2,
    );
  },
};

modes[process.env.PARSE ?? 'full'](FULL_SOURCE);
