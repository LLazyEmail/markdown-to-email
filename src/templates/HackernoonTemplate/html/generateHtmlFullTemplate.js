import TObject from 'atherdon-old-newsletter-js-outertemplate';
import parse from '../../../domain/parse';
import { deliver } from '../../../domain/deliver/deliver';
import { MESSAGE_HTML_FULL_TEMPLATE2 } from '../../../domain/deliver/deliver.constants';
import { verification } from '../../../domain/helper-methods';
import Replace from './components/Replace.class';
import configurationMap from './components/configurationMap';

const parseContent = ({ source }) => {
  return parse(source, (state) => Replace.configure(state), configurationMap);
};

const hackernoonTemplate = (content) => TObject.printTemplate(content);

export const generateHtmlFullTemplateHackernoon = (sourceFile) => {
  // should warnings be returned here?
  const {
    content,
    warnings,
    // previewText
  } = parseContent({
    source: sourceFile,
  });

  verification(warnings, content);

  const hackernoonFullTemplate = hackernoonTemplate(content);

  deliver(
    hackernoonFullTemplate,
    'hackernoon-full-template',
    MESSAGE_HTML_FULL_TEMPLATE2,
  );
};
