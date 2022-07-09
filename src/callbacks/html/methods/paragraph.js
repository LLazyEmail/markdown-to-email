import { newLine } from '../helpers';

import { commonReplace } from '../../../domain/replace-wrapper3.0';

// function now working as planned
// TODO remove unused `text` argument
export function _paragraphWrapper(text, markdown_string) {
  // console.log(text)
  // console.log(line)
  // console.log('------')

  const trimmed = markdown_string.trim();

  // TODO move out this regex into constants file.
  // probably it's better to make it as a separate method + wrap with try - catch stuff

  if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
    return newLine + markdown_string + newLine;
  }

  const params = {
    content: trimmed,
  };

  const config = {
    params,
    name: 'paragraph',
    // debug: true
  };


  const replaced = commonReplace(config);
  return newLine + replaced + newLine;


}

export default _paragraphWrapper;
