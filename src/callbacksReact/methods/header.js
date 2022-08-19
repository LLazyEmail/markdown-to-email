import { newLine } from '../../domain/helper-methods';

import { commonReplace } from '../../domain/replace-wrapper3.0/commonReplace';

function _header(text, chars, content) {
  const params = {
    content: content.trim(),
  };

  const titleTypes = ['header', 'title', 'subtitle'];
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
