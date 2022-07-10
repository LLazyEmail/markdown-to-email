import { newLine } from '../helpers';

import { commonReplace } from '../../../domain/replace-wrapper3.0';

// TODO figure out `text` argument
export function _br(text, newLines) {
  // TODO move out this regex into constants file.
  const regex = new RegExp(newLine, 'g');
  const arrNewLines = newLines.match(regex);

  // TODO well, it's not good. can be improved with lodash
  const result = arrNewLines.reduce(
    (acc, current, index) => (index > 0 ? `${acc}<br/>${current}` : current),
    '',
  );
  
  // console.log(result);
  return result;

  // TODO upgrade this method so it fix with out main logic
  
  
  // NOT FINISHED

  // debug: true
  // const params = {};

  // try {
  //   const replaced = commonReplace(config);

  //   return newLine + replaced;
  // } catch (error) {
  //   catch_error_trace_output(error);
  // }
}

export default _br;
