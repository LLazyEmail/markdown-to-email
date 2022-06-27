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





  const replaced = replaceWrapper(
    'paragraph', config, 'typography', false
    );

  return newLine + replaced + newLine;
}
/// !end function is not working as planned
export default _paragraphWrapper;