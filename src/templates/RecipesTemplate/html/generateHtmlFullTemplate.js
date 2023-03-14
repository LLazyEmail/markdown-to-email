import parse from '../../../domain/parse';
import { verification } from '../../../domain/helper-methods';
import Replace from './components/Replace.class';
import configurationMap from './components/configurationMap';

const parseContent = ({ markdown }) => {
  return parse(markdown, (state) => Replace.configure(state), configurationMap);
};

const recipesTemplate = (content) => `<html>${content}</html>`;

export const generateHtmlFullTemplateRecipes = (markdown) => {
  // should warnings be returned here?
  const {
    content,
    warnings,
    // previewText
  } = parseContent({
    markdown,
  });

  verification(warnings, content);

  // const {
  // content,
  // warnings,
  // } = verificationAndParcing(options)

  const recipesFullTemplate = recipesTemplate(content);

  return recipesFullTemplate;
};
