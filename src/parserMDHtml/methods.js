// @TODO both layouts things can be moved out from importing it here.

import {  
  checkWarnings,
  checkHtml,
  printMessage,  
} from '../helper';


import { 
  writeHTML, 
  generateTemplateName,   
} from '../domain/write' 


// rename too something else, because we have a mix there
import {
  fullTemplate,
  // fullTemplateOLD,
  generateEmptyTemplateComponent,
  generateTemplateComponent,
} from '../templates/PlainJSOuterTemplate';

// import plainV2 from '../domain/plainjs-template/template';



import { parseFullTHing } from './index';




//------------------
const MESSAGE_HTML_CONTENT_ONLY = 
  'The content has been parsed successfully';
const MESSAGE_HTML_FULL_TEMPLATE =
  'The full-template has been parsed successfully';
const MESSAGE_HTML_FULL_TEMPLATE2 =
  'The full-template has been parsed successfully2';
//------------------


//------------------------------
const deliver = (template, name, message) => {

  // console.log(plainV2());


  const fileName = generateTemplateName(name);
  writeHTML(fileName, template);
  printMessage(message, 'green2');
};
//------------------------------

function verification(warnings, content = false) {
  // ***
  if (warnings) checkWarnings(warnings);

  // ***
  if (content) checkHtml(content);
}


//------------------------------
function generateFullTemplate2(sourceFile) {
  // should warnings be returned here?
  const { content, warnings, previewText } = parseFullTHing({
    source: sourceFile,
  });

  // ***
  verification(warnings, content);

  //   @TODO HERE WE CAN APPLY THAT PREVIEW-TEXT IS EMPTY INSIDE
  // console.log(content);

  // throw new Error("my error message");



  //----------------------------------------
  const completedTemplate = fullTemplate({
     content, previewText 
  });
    
  deliver(
    completedTemplate,
    'full-template-2',
    MESSAGE_HTML_FULL_TEMPLATE2,
  );


  
}

// function generateFullTemplate() {
//   // same as from top

//   const template = fullTemplateOLD({ content });

//   deliver(template, 'full-template', MESSAGE_HTML_CONTENT_ONLY);
// }


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
// function generateFullTemplate(sourceFile) {
//   // same as from top

//   const fullContent = layouts.fullTemplate(content);
//   const fileName = generateTemplateName('full-template');
//   const message = 'The full-template has been parsed successfully';
//   printMessage(message, 'green2');
// }

//-----------------------------
//------------------------------
function compileEmptyTemplate() {
  //---------------------

  const cleanTemplate = generateEmptyTemplateComponent();

  deliver(
    cleanTemplate, 
    'lit-empty', 
    'Testing LIT template'
    );
}
//--------------

function compileTemplate() {
  //---------------------

  // pass here a content thing that might

  const template = generateTemplateComponent();

  deliver(
    template, 
    'lit-template', 
    'Testing LIT template'
    );
}
//--------------

export {
  // generateContentOnly,

  generateFullTemplate2,
  // generateFullTemplate,
  //-------------
  MESSAGE_HTML_CONTENT_ONLY,
  MESSAGE_HTML_FULL_TEMPLATE,
  MESSAGE_HTML_FULL_TEMPLATE2,
  //-------------
  compileEmptyTemplate,
  compileTemplate,
};
