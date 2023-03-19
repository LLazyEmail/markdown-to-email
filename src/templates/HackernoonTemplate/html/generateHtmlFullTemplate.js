import TObject from 'atherdon-old-newsletter-js-outertemplate';
import parse from '../../../domain/parse';
import { verification } from '../../../domain/helper-methods';
import Replace from './components/Replace.class';
import configurationMap from './components/configurationMap';
// import generateFullTemplate from '../../../domain/template-helper';
// this method will be updated in order to fit with front matter integration
const parseContent = ({ markdown, data }) => {
  // return parse(
  //   markdown,
  //   (state) => Replace.configure(state),
  //   configurationMap,
  //   data,
  // );
  const { content, warnings } = parse(
    markdown,
    (state) => Replace.configure(state),
    configurationMap,
    data,
  );

  verification(warnings, content);

  return content;
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

  const content = parseContent({ markdown, data });

  // const settings = {
  //   string: content,
  //   data: data || false,
  // };

  const hackernoonFullTemplate = hackernoonTemplate(content);

  // console.log(
  //   generateFullTemplate(
  //     markdown,
  //     settings,
  //     hackernoonTemplate,
  //     parseContent,
  //   ),
  // );

  return hackernoonFullTemplate;
};
