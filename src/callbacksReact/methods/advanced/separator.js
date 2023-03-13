import { commonReplace } from '../../../domain/replace-wrapper3.0/commonReplace';
import { newLine } from '../../../domain/helper-methods';

function _separator(text) {
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
  return newLine + replaced + newLine;
}

export default _separator;
