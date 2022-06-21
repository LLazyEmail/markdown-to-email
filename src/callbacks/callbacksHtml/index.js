import {
  
  blockquote,
  // mem,
  header,

  // italic,
  // del,
  // q,
  // code,
  // hr,
  // empty,

} from './methods/simple';


import { strong } from './methods/strong';
import { link } from './methods/link';

import {
  italic,
  del,
  q,
  code,
  hr,
  empty
 } from './methods/simple-without-replacer';


import { ulList, olList } from './methods/lists';

import { image, paragraphWrapper, sponsorship, br } from './methods/callbacks';

import { separator } from './methods/custom';

// export default {
export {
  strong,
  link,
  blockquote,
  mem,
  header,
  italic,
  del,
  q,
  code,
  hr,
  empty,
  ulList,
  olList,
  image,
  paragraphWrapper,
  sponsorship,
  br,
  separator,
};
