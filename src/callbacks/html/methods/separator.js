import { newLine } from '../helpers';

import { commonReplace } from '../../../domain/replace-wrapper3.0';

function _separator(text, content) {

  const params = {};

  const config = {
    params,

    name: 'separator',
    debug: true,
  };

  const replaced = commonReplace(config);
  console.log(replaced);
  return newLine + replaced + newLine;  

}

export default _separator;
