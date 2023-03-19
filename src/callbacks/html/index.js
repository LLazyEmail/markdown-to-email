import _blockquote from './methods/simple';
import _header from './methods/header';
import _strong from './methods/strong';
import _link from './methods/link';
import {
  // _italic,
  _del,
  _q,
  _code,
  _hr,
  _empty,
} from './methods/simple-without-replacer';

import { _italic, _italicAsterix } from './methods/italic';
import { _ulList, _olList, getParsedSubList } from './methods/lists';
import _br from './methods/br';
//---------------
// advanced callbacks that might get replaced with front matter
import { _image } from './methods/advanced/image';
import _separator from './methods/advanced/separator';
import { _meme, _memeData } from './methods/advanced/memes';
import { _sponsorship } from './methods/advanced/sponsor';
import _previewText from './methods/advanced/preview';
//---------------
import { _paragraphWrapper } from './methods/paragraph';

export {
  _strong,
  _link,
  _blockquote,
  _header,
  //------------
  _italic,
  _italicAsterix,
  //---------
  _del,
  _q,
  _code,
  _hr,
  _empty,
  //---
  _ulList,
  _olList,
  getParsedSubList,
  //---
  _image,
  _paragraphWrapper,
  _sponsorship,
  _br,
  _separator,
  _previewText,
  _meme,
  _memeData,
};
