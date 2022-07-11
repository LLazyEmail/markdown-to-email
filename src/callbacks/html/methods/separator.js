import { newLine } from '../helpers';

import { commonReplace } from '../../../domain/replace-wrapper3.0';

function _separator(text, content) {

  const params = {};

  const config = {
    params,

    name: 'separator',
    // debug: true,
  };

  const replaced = commonReplace(config);

    const result = newLine + replaced + newLine;
    return result;

}

export default _separator;
