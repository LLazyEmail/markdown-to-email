import { verification } from './helper-methods';
import parse from './parse';
import Replace from '../templates/HackernoonTemplate/html/components/Replace.class';

const configurationMap = [];
const parseContent = ({ markdown, data }) => {
  return parse(
    markdown,
    (state) => Replace.configure(state),
    configurationMap,
    data,
  );
};

// The `generateHtmlFullTemplate` function takes three arguments:
// `markdown`: the Markdown content to parse and use for generating the template.
// `parseOptions`: an object containing any options that need to be passed to the parseContent function. This object is used to specify how the Markdown content should be parsed.
// `templateFunction`: the function to use for generating the HTML template.
export const generateHtmlFullTemplate = (
  markdown,
  parseOptions,
  templateFunction,
) => {
  const {
    content,
    warnings,
    // previewText
  } = parseContent(parseOptions);

  verification(warnings, content);

  const fullTemplate = templateFunction(content);

  return fullTemplate;
};

// export const generateHtmlFullTemplateHackernoon = (markdown, data = false) => {
//   return generateHtmlFullTemplate(
//     markdown,
//     { markdown, data },
//     hackernoonTemplate,
//   );
// };

// export const generateHtmlFullTemplateRecipes = (markdown) => {
//   return generateHtmlFullTemplate(markdown, { markdown }, recipesTemplate);
// };
