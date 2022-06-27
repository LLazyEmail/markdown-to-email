
import { replaceWrapper, newLine } from '../helpers';

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

  return result;
}

export default _br;