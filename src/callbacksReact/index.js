import * as simple from './methods/simple';
import * as callbacks from './methods/callbacks';
import * as lists from './methods/lists';
import _header from './methods/header';

import _sponsorship from './methods/advanced/sponsor';
import _previewText from './methods/advanced/preview';
import _meme from './methods/advanced/meme';
import _image from './methods/advanced/image';

const Callbacks = {
  ...simple,
  ...lists,
  _header,
  ...callbacks,
  _sponsorship,
  _previewText,
  _meme,
  _image,
};

export { Callbacks };
