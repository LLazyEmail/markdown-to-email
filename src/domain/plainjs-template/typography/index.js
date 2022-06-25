//strong as strongLiteral,
  
  //link as linkLiteral,
  //blockquote as blockquoteLiteral,
  //meme as memeLiteral,
  //header as headerLiteral,
  //italic as italicLiteral,
  //del as delLiteral,
  //q as qLiteral,
  //code as codeLiteral,
  //hr  as hrLiteral,
  // empty as emptyLiteral,
  //ulList as ulListLiteral,
  //olList as olListLiteral,
  //image as imageLiteral,


import { headline, headlineComponent } from './templates/headline';
import { logoBottom, logoBottomComponent } from './templates/logoBottom';
import { logoTop, logoTopComponent } from './templates/logoTop';
import { previewText, previewTextComponent } from './templates/previewText';
import { section, sectionComponent } from './templates/section';
import { sponsor, sponsorComponent } from './templates/sponsor';

import { ctaList, ctaComponent } from './templates/ctaList';


 
const body = {
  headline,
  logoBottom,
  logoTop,
  previewTextLiteral: previewText,
  section,
  sponsorLiteral: sponsor,

  ctaList,

  headlineComponent,
  logoBottomComponent,
  logoTopComponent,
  previewTextComponent,
  sectionComponent,
  sponsorComponent,
  ctaComponent,
};

export default body;
