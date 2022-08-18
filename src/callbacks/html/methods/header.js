import {
  newLine,
  // beforeBeginingNewLine
} from '../helpers';

import { commonReplace } from '../../../domain/replace-wrapper3.0';

// import CallbackFactory from '../../../domain/callbacks-factory';

// TODO fix issue related to text variable
function _header(text, chars, content) {
  // const factory = CallbackFactory.create();
  console.log('this', this);
  const params = {
    content: content.trim(),
  };

  const titleTypes = ['title', 'subtitle', 'heading'];

  const name = titleTypes[chars.length - 1];

  const config = {
    configurationMap: this.configurationMap,
    params,
    name,
    // debug: true,
  };

  const replaced = commonReplace(config);
  return newLine + replaced;
}

export default _header;
