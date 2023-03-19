// import { verification } from './helper-methods';
// import parse from './parse';
// import Replace from '../templates/HackernoonTemplate/html/components/Replace.class';

// const configurationMap = [];
// const parseContent = ({ markdown, data }) => {
//   return parse(
//     markdown,
//     (state) => Replace.configure(state),
//     configurationMap,
//     data,
//   );
// };

// The `generateFullTemplate` function takes three arguments:
// `markdown`: the Markdown content to parse and use for generating the template.
// `parseOptions`: an object containing any options that need to be passed to the parseContent function. This object is used to specify how the Markdown content should be parsed.
// `templateFunction`: the function to use for generating the HTML template.
const generateFullTemplate = (
  markdown,
  parseOptions,
  templateFunction,
  parseContentFunction,
) => {
  const {
    content,
    // warnings,
    // previewText
  } = parseContentFunction(parseOptions);

  // verification(warnings, content);

  const generatedTemplate = templateFunction(content);

  return generatedTemplate;
};

// export const generateHtmlFullTemplateHackernoon = (markdown, data = false) => {
//   return generateFullTemplate(
//     markdown,
//     { markdown, data },
//     hackernoonTemplate,
//   );
// };

// export const generateHtmlFullTemplateRecipes = (markdown) => {
//   return generateFullTemplate(markdown, { markdown }, recipesTemplate);
// };

export default generateFullTemplate;
