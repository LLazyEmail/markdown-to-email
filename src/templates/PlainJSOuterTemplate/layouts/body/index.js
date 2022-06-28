import { headline } from './templates/headline';
import { logoBottom } from './templates/logoBottom';
import { logoTop } from './templates/logoTop';
import previewText from './templates/previewText';
import { section } from './templates/section';
import { sponsor } from './templates/sponsor';

import { ctaList } from './templates/ctaList';

const body = {
  headline,
  logoBottom,
  logoTop,
  previewTextLiteral: previewText,
  section,
  sponsorLiteral: sponsor,

  ctaList,

  // headlineComponent,
  // logoBottomComponent,
  // logoTopComponent,
  // previewTextComponent,
  // sectionComponent,
  // sponsorComponent,
  // ctaComponent,
};

export default body;
