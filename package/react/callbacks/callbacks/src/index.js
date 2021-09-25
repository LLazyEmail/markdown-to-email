import PlainCallbacks from './plain-version/index';
import ReactCallbacks from './react/index';

import Replacer from './plain-version/replace';
import ReactReplacer from './react/replace';

import {
  newLine, 
  replaceWrapper, 
  // replaceReactWrapper
} from './helpers';

import {
  replaceMarkdown, 
  replaceMarkdownPreviewText
} from './replace-md'

export {
  PlainCallbacks,
  ReactCallbacks,
  ReactReplacer,
  Replacer,
  newLine,
  replaceWrapper,
  // replaceReactWrapper,
  replaceMarkdown,
  replaceMarkdownPreviewText
};
