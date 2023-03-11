import TObject from 'atherdon-old-newsletter-js-outertemplate';
import parse from '../../../domain/parse';
import { verification } from '../../../domain/helper-methods';
import Replace from './components/Replace.class';
import configurationMap from './components/configurationMap';
// this method will be updated in order to fit with front matter integration
const parseContent = ({ markdown }) => {
  return parse(markdown, (state) => Replace.configure(state), configurationMap);
};
// printTemplate must support content + data attributes
const hackernoonTemplate = (content) => TObject.printTemplate(content);

export const generateHtmlFullTemplateHackernoon = (markdown) => {
  // should warnings be returned here?
  const {
    content,
    warnings,
    // previewText
  } = parseContent({
    markdown,
  });

  verification(warnings, content);

  const hackernoonFullTemplate = hackernoonTemplate(content);

  return hackernoonFullTemplate;
};
