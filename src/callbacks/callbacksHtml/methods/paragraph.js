import { replaceWrapper, newLine } from '../helpers';

import { replacerParagraph } from '../../../domain/replace-wrapper3.0'

import { catch_error_trace_output } from '../../../domain/error-handle'

// function now working as planned
// TODO remove unused `text` argument
export function _paragraphWrapper(text, line) {

  // console.log(text)
  // console.log(line)
  // console.log('------')
  

  const trimmed = line.trim();

  // TODO move out this regex into constants file.

  if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
    return newLine + line + newLine;
  }

  const params = {
    content: trimmed,
  };


  const config = {
    params,
    name: 'paragraph',

    // debug: true
  };
  

  try {
  
    const replaced = replacerParagraph(config);
 
    return newLine + replaced + newLine;

  } catch (error) { catch_error_trace_output(error); }


}

export default _paragraphWrapper;