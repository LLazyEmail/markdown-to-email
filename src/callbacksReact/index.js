import * as simple from './methods/simple';
import * as callbacks from './methods/callbacks';
import * as lists from './methods/lists';
import _header from './methods/header';

const Callbacks = { ...simple, ...lists, _header, ...callbacks };

export { Callbacks };
