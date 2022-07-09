import { replaceWrapper, newLine } from '../helpers';

import { replacerParagraph, commonReplace } from '../../../domain/replace-wrapper3.0';

import { catch_error_trace_output } from '../../../domain/error-handle';

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

  // try {
  //   const replaced = replacerParagraph(config);
  //   // commonReplace

  
  // } catch (error) {
  //   catch_error_trace_output(error);
  // }




}

export default _paragraphWrapper;
