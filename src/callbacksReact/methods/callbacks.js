// HELPER FROM MAIN CALLBACKS
// TODO undisable because there is a lot of errors
/* eslint-disable */
import { 
  // replaceReactWrapper, 
  newLine } from '../helpers';

/// function is not working as planned

export function _paragraph(text, line) {
  const trimmed = line.trim();

  if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
    // TODO move out this regex into constants file.
    return newLine + line + newLine;
  }

  const params = {
    content: trimmed,
  };

  const config = {
    params,
    name: 'paragraph',
    debug: true,
  };

  // try {
  //   const replaced = commonReplace(config);

  //   return replaced;
  // } catch (error) {
  //   catchErrorTraceOutput(error);
  // }

  // const result = newLine + replaceReactWrapper('paragraph', config) + newLine;
  // console.log(config);

  return result;
}
/// !end function is not working as planned

export function _image(text, alt, srcWithTooltip) {
  // const src = srcWithTooltip.trim().replace(/\"image_tooltip\"/, '');

  // const params = {
  //   src: src.trim(),
  //   altText: alt,
  // };

  // const config = {
  //   params,
  //   name: 'image',
  //   debug: true,
  // };

  this.warnings.images++;

  // try {
  //   const replaced = commonReplace(config);

  //   return replaced;
  // } catch (error) {
  //   catchErrorTraceOutput(error);
  // }

  // const result = replaceReactWrapper('image', config);
  return result;
}

export function _br(text, newLines) {
  const arrNewLines = newLines.match(new RegExp(newLine, 'g'));

  // @TODO well, it's not good. can be improved with lodash
  // @TODO I REALLY HATE THIS LINE
  const result = arrNewLines.reduce(
    (acc, current, index) => (index > 0 ? `${acc}<br/>${current}` : current),
    '',
  );

  return result;
}

export function _sponsorship(text) {
  const regex = /\[(.*?)\]/g;
  const [content, href, src] = text
    .match(regex)
    .map((match) => match.replace(/[\[\]]/g, ''));

  // const params = {
  //   src: src.trim(),
  //   href: href.trim(),
  //   content: content.trim(),
  // };

  // const config = {
  //   params,
  //   name: 'sponsor',
  //   debug: true,
  // };

  // try {
  //   const replaced = commonReplace(config);

  //   return replaced;
  // } catch (error) {
  //   catchErrorTraceOutput(error);
  // }

  // @TODO nope, not good
  this.errors.sponsorshipTop
    ? (this.errors.sponsorshipBottom = true)
    : (this.errors.sponsorshipTop = true);

  // return replaceReactWrapper('sponsor', config, 'body');
}

// export { _paragraph, _image, _sponsorship, _br, newLine };
