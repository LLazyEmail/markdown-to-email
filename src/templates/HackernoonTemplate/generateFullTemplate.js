import TObject from 'atherdon-old-newsletter-js-outertemplate';
import parse from '../../domain/parse';
import configureReplacer from '../../domain/replace-class/configuration';
import { deliver } from '../../domain/deliver/deliver';
import { MESSAGE_HTML_FULL_TEMPLATE2 } from '../../domain/deliver/deliver.constants';
import { verification } from '../../domain/helper-methods';

const parseContent = ({ source }) => {
  return parse(source, configureReplacer);
};

const hackernoonTemplate = (content) => TObject.printTemplate(content);

export const generateFullTemplateHackernoon = (sourceFile) => {
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
