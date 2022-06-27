import { replaceWrapper, newLine } from '../helpers';

import { replaceHeader } from '../../../domain/replace-wrapper3.0'

import { catch_error_trace_output } from '../../../domain/error-handle'


// TODO remove unused `text` argument
export function _br(text, newLines) {

  



  // TODO move out this regex into constants file.
  const regex = new RegExp(newLine, 'g');
  const arrNewLines = newLines.match(regex);



  // @TODO well, it's not good. can be improved with lodash
  const result = arrNewLines.reduce(
    (acc, current, index) => (index > 0 ? `${acc}<br/>${current}` : current),
    '',
  );

  // return result;
// NOT FINISHED
  // debug: true
  const params = {
    
  };

  try {

    const replaced = replaceHeader(config);

  
    return newLine + replaced;

  } catch (error) { catch_error_trace_output(error); }


}

export default _br;