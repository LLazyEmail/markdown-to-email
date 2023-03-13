import {
  writeHTML,
  isFolderExists,
  generateTemplateName,
} from 'markup-generator';
import {
  generateHtmlFullTemplateHackernoon,
  generateReactFullTemplateHackernoon,
  generateHtmlFullTemplateRecipes,
  generateFrontHackernoon,
} from './src';
import { printMessage } from './src/domain/helper-methods/cli';
import { deliver } from './src/domain/deliver/deliver';
import { MESSAGE_HTML_FULL_TEMPLATE2 } from './src/domain/deliver/deliver.constants';
import {
  hackernoonContent,
  FULL_SOURCE,
  nomoretogoContent,
  frontMarkdownHackernoon,
} from './src/domain/content-source';
// TODO add more messages here, and finally replace messages in our methods
const MESSAGE_REACT_FULL_TEMPLATE =
  'The FullTemplate has been parsed successfully';
// const MESSAGE_REACT_CONTENT = 'The Content has been parsed successfully';
// connection to source files moved into /domain/content-source/index.js
const markdown = hackernoonContent;
// console.log('-----');
// console.log(frontMarkdownHackernoon);

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
    const markdownRecipes = nomoretogoContent;

    const recipesFullTemplate =
      generateHtmlFullTemplateRecipes(markdownRecipes);

    deliver(
      recipesFullTemplate,
      'recipes-full-template',
      MESSAGE_HTML_FULL_TEMPLATE2,
    );
  },
  hackernnonFront: () => {
    // const markdownRecipes = nomoretogoContent;

    const HNFrontFullTemplate = generateFrontHackernoon(
      frontMarkdownHackernoon,
    );

    deliver(
      HNFrontFullTemplate,
      'frontmatter-full-template',
      MESSAGE_HTML_FULL_TEMPLATE2,
    );
  },
};

modes[process.env.PARSE ?? 'full'](FULL_SOURCE);
