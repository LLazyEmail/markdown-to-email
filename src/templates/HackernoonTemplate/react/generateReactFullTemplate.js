import parse from '../../../domain/parse';
import { verification } from '../../../domain/helper-methods';
import { reactFullTemplate } from './generateReactFullTemplate/components/reactFullTemplate';
import Replace from './components/Replacer.class';
import configurationMap from './components/configurationMap';

const parseReactContent = (markdown) =>
  parse(markdown, (state) => Replace.configure(state), configurationMap);

export const generateReactFullTemplateHackernoon = (markdown) => {
  const {
    content,
    warnings,
    // previewText
  } = parseReactContent(markdown);

  verification(warnings);

  const fullContent = reactFullTemplate(content);

  return fullContent;
};
