import parse from '../../../domain/parse';
import { deliver } from '../../../domain/deliver/deliver';
import { MESSAGE_HTML_FULL_TEMPLATE2 } from '../../../domain/deliver/deliver.constants';
import { verification } from '../../../domain/helper-methods';
import Replace from './components/Replace.class';
import configurationMap from './components/configurationMap';

const parseContent = ({ source }) => {
  return parse(source, (state) => Replace.configure(state), configurationMap);
};

const recipesTemplate = (content) => `<html>${content}</html>`;

export const generateHtmlFullTemplateRecipes = (sourceFile) => {
  // should warnings be returned here?
  const {
    content,
    warnings,
    // previewText
  } = parseContent({
    source: sourceFile,
  });

  verification(warnings, content);

  const recipesFullTemplate = recipesTemplate(content);

  deliver(
    recipesFullTemplate,
    'recipes-full-template',
    MESSAGE_HTML_FULL_TEMPLATE2,
  );
};
