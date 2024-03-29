import { newLine } from '../../helpers';

import { commonReplace } from '../../../../domain/replace-wrapper3.0/commonReplace';

function _separator(
  text,
  // content
) {
  // console.log(text);
  // console.log(content);

  const params = {
    content: text.trim(), // we have an issue, when we passing empty params
  };

  const config = {
    configurationMap: this.configurationMap,
    params,

    name: 'separator',
    debug: true,
  };

  const replaced = commonReplace(config);
  // console.log(replaced);
  return newLine + replaced + newLine;
}

export default _separator;
