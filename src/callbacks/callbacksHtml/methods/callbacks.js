import { replaceWrapper, newLine } from '../helpers';

/// function is not working as planned
// TODO remove unused `text` argument
export function _paragraphWrapper(text, line) {
  const trimmed = line.trim();

  // TODO move out this regex into constants file.

  if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
    return newLine + line + newLine;
  }

  const config = {
    content: trimmed,
  };





  const replaced = replaceWrapper('paragraph', config);

  return newLine + replaced + newLine;
}
/// !end function is not working as planned




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

// export { 
  // _paragraphWrapper, _image, 
  // _sponsorship, _br 
// };
