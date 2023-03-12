import TObject from 'atherdon-old-newsletter-js-outertemplate';
import parse from '../../../domain/parse';
import { verification } from '../../../domain/helper-methods';
import Replace from '../html/components/Replace.class';
import configurationMap from '../html/components/configurationMap';
// this method will be updated in order to fit with front matter integration
const parseContent = ({ markdown, data }) => {
  return parse(
    markdown,
    (state) => Replace.configure(state),
    configurationMap,
    data,
  );
};
// printTemplate must support content + data attributes
const hackernoonTemplate = (content, data) =>
  TObject.printTemplateData(content, data);
// i'm using 2 arguments for back dependency ability
export const generateFrontHackernoon = ({ markdown, data }) => {
  // should warnings be returned here?
  const {
    content,
    warnings,
    // previewText
  } = parseContent({
    markdown,
    data,
  });

  verification(warnings, content);

  const hackernoonFullTemplate = hackernoonTemplate(content, data);

  return hackernoonFullTemplate;
};
