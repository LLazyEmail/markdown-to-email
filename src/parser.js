// ----------------------------
// Delete it later
// ----------------------------

import { writeHTML, generateTemplateName } from 'markup-generator';
import reactReplacer from 'atherdon-newsletter-react-replacer';
// import {
//   generateEmptyTemplateComponent,
//   generateTemplateComponent,
// } from 'atherdon-old-newsletter-js-outertemplate';
import outerTemplate from 'atherdon-old-newsletter-js-outertemplate';
import { generateFullTemplate2 } from './methods';

import { generateEmptyTemplateComponent } from './templates/OuterTemplate';
// @TODO add path, in order to make it work PERFECTLY
const FULL_SOURCE = 'source/source.md';

// I left this variable here just for depricated methods. it's time to use full-template at all places
const CONTENT_SOURCE = 'source/source.md';

console.info(process.env.PARSE, '***mode');
switch (process.env.PARSE) {
  case 'full':
    console.log('FULL');
    // generateFullTemplate();
    generateFullTemplate2(FULL_SOURCE);
    break;

  case 'reactContentOnly':
    // same as default, but with react components instead.
    reactReplacer.generateReactContent(CONTENT_SOURCE);
    break;

  case 'reactFull':
    reactReplacer.generateReactFullTemplate(FULL_SOURCE);
    break;

  //------------------
  case 'plainEmpty':
    // compileEmptyTemplate();
    // generateEmptyTemplateComponent()

    // TODO find out and remove disabling rules
    // eslint-disable-next-line no-case-declarations
    const content = generateEmptyTemplateComponent();
    // eslint-disable-next-line no-case-declarations
    const fileName = generateTemplateName('lit-empty');

    writeHTML(fileName, content);

    break;

  case 'plainTemplate':
    // compileTemplate();
    outerTemplate.generateTemplateComponent();
    break;
  //------------------

  default:
    // generateFullTemplate(FULL_SOURCE);
    break;
}
