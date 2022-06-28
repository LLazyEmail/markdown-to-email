import { replaceWrapper, newLine } from '../helpers';

import { replaceLink } from '../../../domain/replace-wrapper3.0';

import { catch_error_trace_output } from '../../../domain/error-handle';

// TODO remove unused `text` argument
// check text variable later
// markdown_string
function _link(text, title, href) {
  const params = {
    content: title.trim(),
    href: href.trim(),
  };

  const config = {
    params,
    name: 'link',

    // debug: true
  };

  try {
    const replaced = replaceLink(config);

    return newLine + replaced + newLine;
  } catch (error) {
    catch_error_trace_output(error);
  }

  return replaced;
}

export default _link;
