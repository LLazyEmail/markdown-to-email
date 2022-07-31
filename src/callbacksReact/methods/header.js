import { newLine } from '../../domain/helper-methods';

import { commonReplaceReact } from '../../domain/replace-wrapper3.0';

function _header(text, chars, content) {
  const params = {
    content: content.trim(),
  };

  const titleTypes = ['header', 'title', 'subtitle'];
  const name = titleTypes[chars.length - 1];

  const config = {
    params,
    name,

    // debug: true,
  };

  const replaced = commonReplaceReact(config);
  return newLine + replaced;
}

export default _header;
