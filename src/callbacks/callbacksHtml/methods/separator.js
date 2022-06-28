import { replaceWrapper, newLine } from '../helpers';
import { commonReplace } from '../../../domain/replace-wrapper3.0';

import { catch_error_trace_output } from '../../../domain/error-handle';

function _separator() {
  const params = {};

  const config = {
    params,

    name: 'separator',
    debug: true,
  };

  try {
    const replaced = commonReplace(config);

    const result = newLine + replaced + newLine;
    return result;
  } catch (error) {
    catch_error_trace_output(error);
  }
}

export default _separator;
