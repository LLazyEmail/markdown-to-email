import { commonReplace } from '../../../domain/replace-wrapper3.0/commonReplace';

import { catchErrorTraceOutput } from '../../../domain/error-handle';

// TODO remove unused `text` argument
// check text variable later
// markdown_string
function _link(text, title, href) {
  const params = {
    content: title.trim(),
    href: href.trim(),
  };

  const config = {
    configurationMap: this.configurationMap,
    params,
    name: 'link',
    // debug: true
  };

  let replaced = '';
  try {
    replaced = commonReplace(config);
    // return newLine + replaced + newLine;
  } catch (error) {
    catchErrorTraceOutput(error);
  }
  return replaced;
}

export default _link;
