import { replaceWrapper, newLine } from '../helpers';

/// function is not working as planned

function paragraphWrapper(text, line) {
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

function image(text, alt, srcWithTooltip) {
  // eslint-disable-next-line no-useless-escape
  const src = srcWithTooltip.trim().replace(/\"image_tooltip\"/, '');

  const config = {
    src: src.trim(),
    altText: alt,
  };

  // i dont think it will work well
  // eslint-disable-next-line no-plusplus
  this.warnings.images++;

  const replaced = replaceWrapper('image', config);

  return replaced;
}

function br(text, newLines) {
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

function sponsorship(text) {
  // TODO move out this regex into constants file.
  const regex = /\[(.*?)\]/g;

  const [content, href, src] = text
    .match(regex)
    // eslint-disable-next-line no-useless-escape
    .map((match) => match.replace(/[\[\]]/g, '')); // TODO move out this regex into constants file.

  const config = {
    src: src.trim(),
    href: href.trim(),
    content: content.trim(),

    folder: 'body',
  };

  // @TODO nope, not good
  // eslint-disable-next-line no-unused-expressions
  this.errors.sponsorshipTop
    ? (this.errors.sponsorshipBottom = true)
    : (this.errors.sponsorshipTop = true);

  const replaced = replaceWrapper('sponsor', config);

  return replaced;
}

export { paragraphWrapper, image, sponsorship, br };
