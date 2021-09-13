import { replaceHTMLWrapper, newLine } from '../helpers';

/// function is not working as planned

function paragraphWrapper(text, line) {
  const trimmed = line.trim();

  if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
    // @TODO move out this regex into constants file.
    return newLine + line + newLine;
  }

  const config = {
    content: trimmed,
  };
  const result = newLine + replaceHTMLWrapper('paragraph', config) + newLine;
  // console.log(config);

  return result;
}
/// !end function is not working as planned

function image(text, alt, srcWithTooltip) {
  const src = srcWithTooltip.trim().replace(/\"image_tooltip\"/, '');

  const config = {
    src: src.trim(),
    altText: alt,
  };

  this.warnings.images++;

  const result = replaceHTMLWrapper('image', config);
  return result;
}

function br(text, newLines) {
  const arrNewLines = newLines.match(new RegExp(newLine, 'g'));

  // @TODO well, it's not good. can be improved with lodash
  const result = arrNewLines.reduce((acc, current, index) => (index > 0 ? `${acc}<br/>${current}` : current), '');

  return result;
}

function sponsorship(text) {
  const regex = /\[(.*?)\]/g;
  const [content, href, src] = text
    .match(regex)
    .map((match) => match.replace(/[\[\]]/g, ''));

  const config = {
    src: src.trim(),
    href: href.trim(),
    content: content.trim(),
  };

  // @TODO nope, not good
  this.errors.sponsorshipTop ? this.errors.sponsorshipBottom = true : this.errors.sponsorshipTop = true;

  return replaceHTMLWrapper('sponsor', config, 'body');
}

export {
  paragraphWrapper,
  image,
  sponsorship,
  br
};
