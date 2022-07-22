import parse from '../../domain/parse';
import configureReplacer from '../../domain/replace-class/configuration';
import { deliver } from '../../domain/deliver/deliver';
import { MESSAGE_HTML_FULL_TEMPLATE2 } from '../../domain/deliver/deliver.constants';
import { verification } from '../../domain/helper-methods';
import { hackernoonTemplate } from './fullTemplate';

const parseContent = ({ source }) => {
  return parse(source, configureReplacer);
};

export const generateFullTemplateHackernoon = (sourceFile) => {
  // should warnings be returned here?
  const { content, warnings, previewText } = parseContent({
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

// this method is depricated.
// we will remove export of it at some point.
// const generateContentOnly = (sourceFile) => {
//   const { content, warnings, previewText } = parse(sourceFile);

//   // ***
//   verification(warnings);

//   deliver(content, 'content', MESSAGE_HTML_CONTENT_ONLY);
// };
//------------------------------
//------------------------------
// const generateInterior = (sourceFile) => {
//   const { content, warnings, previewText } = parse(sourceFile);

//   verification(warnings);
// };
//------------------------------
//------------------------------


//-----------------------------
//------------------------------
/* function compileEmptyTemplate() {
  //---------------------

//}
//--------------

function compileTemplate() {
  //---------------------

  // pass here a content thing that might

  const template = generateTemplateComponent();

  deliver(template, 'lit-template', 'Testing LIT template');
}
//--------------

export {
  // generateContentOnly,

  generateFullTemplate2,
  // generateFullTemplate,
  //------------
  //-------------
  
  compileTemplate,
};
 */
