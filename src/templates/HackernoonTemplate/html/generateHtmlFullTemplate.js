import TObject from 'atherdon-old-newsletter-js-outertemplate';
import parse from '../../../domain/parse';
import { verification } from '../../../domain/helper-methods';
import Replace from './components/Replace.class';
import configurationMap from './components/configurationMap';

const parseContent = ({ markdown }) => {
  return parse(markdown, (state) => Replace.configure(state), configurationMap);
};

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
