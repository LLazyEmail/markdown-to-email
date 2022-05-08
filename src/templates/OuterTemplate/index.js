// import innerComponents from 'atherdon-newsletter-js-layouts-body';

import { printMain, printFooter, printBody } from './methods';

// import fullTemplateOLD from './depricated/full-template';
import { fullTemplate } from './fullTemplate';

import generateTemplateComponent from './t/generateTemplate';
import generateEmptyTemplateComponent from './t/emptyTemplate';

export {
  //   body,

  //   //spread misc
  //   address,
  //   copyrights,
  //   fonts,
  //   headStyles,
  //   newsletterSponsorshipLink,
  //   unsubscribe,
  //   head,

  // fullTemplateOLD,
  fullTemplate,
  // headline,
  // logoBottom,
  // logoTop,
  // previewText,
  // section,
  // sponsor,
  // ctaList,

  generateTemplateComponent,
  generateEmptyTemplateComponent,
  printMain,
  printFooter,
  printBody,
};
