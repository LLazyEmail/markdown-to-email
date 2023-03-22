import TObject from 'atherdon-old-newsletter-js-outertemplate';
import parse from '../../../domain/parse';
// import newParse from '../../../domain/parse-content';
import { verification } from '../../../domain/helper-methods';
import Replace from './components/Replace.class';
// -----------

import ReplacerClassTwo from '../../../domain/replaceClass/second';
import configurationMap from './components/configurationMap';
// import generateFullTemplate from '../../../domain/template-helper';
// this method will be updated in order to fit with front matter integration
const parseContent = ({ markdown, data }) => {
  //   // return parse(
  //   //   markdown,
  //   //   (state) => Replace.configure(state),
  //   //   configurationMap,
  //   //   data,
  //   // );

  const a = new ReplacerClassTwo();
  a.configure('123');
  console.log(a);

  // const replacingStateWithConfigurationMap = {
  //   configurationMap,
  //   'something': '123'
  // }

  const { content, warnings } = parse(
    markdown,
    (config) => Replace.configure(config),
    configurationMap,
    data,
  );

  if (!content) {
    throw new Error('Content is missing in parseContent');
  } else {
    verification(warnings, content);

    return content;
  }
};
// printTemplate must support content + data attributes
const hackernoonTemplate = (content) => TObject.printTemplate(content);

// export const generateHtmlFullTemplateHackernoon = (markdown, data = false) => {

// }

// i'm using 2 arguments for back dependency ability
export const generateHtmlFullTemplateHackernoon = (markdown, data = false) => {
  // should warnings be returned here?
  // const {
  //   content,
  //   warnings,
  //   // previewText
  // } = parseContent({
  //   markdown,
  //   data,
  // });

  // verification(warnings, content);

  // const configureReplacer = (state) => Replace.configure(state);

  // const htmlReplaceClass = new Replace();
  // console.log(htmlReplaceClass);
  // const newContent = newParse(
  //   { markdown, data },
  //   configurationMap,
  //   (state) => Replace.configure(state)
  // );

  // console.log(newContent);

  const content = parseContent({ markdown, data });

  // const settings = {
  //   string: newContent,
  //   data: data || false,
  // };

  const hackernoonFullTemplate = hackernoonTemplate(content);

  // console.log(
  //   generateFullTemplate(markdown, settings, hackernoonTemplate, newParse),
  // );

  return hackernoonFullTemplate;
};
