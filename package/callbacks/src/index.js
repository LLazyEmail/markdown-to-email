import PlainCallbacks from './plain-version/index';
import ReactCallbacks from './react/index';
import Replacer from './plain-version/replace';
import ReactReplacer from './react/react-replace';
import {
  newLine, 
  replaceHTMLWrapper, 
  replaceReactWrapper
} from './helpers';

import {
  replaceMarkdown, 
  replaceMarkdownPreviewText,
} from './replaceMarkdown'

export {
  PlainCallbacks,
  ReactCallbacks,
  ReactReplacer,
  Replacer,
  newLine,
  replaceHTMLWrapper,
  replaceReactWrapper,
  replaceMarkdown,
  replaceMarkdownPreviewText
};
