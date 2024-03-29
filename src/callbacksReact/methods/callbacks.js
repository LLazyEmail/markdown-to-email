import { newLine } from '../../domain/helper-methods';

import { commonReplace } from '../../domain/replace-wrapper3.0/commonReplace';

/// function is not working as planned

function _paragraph(text, line) {
  const trimmed = line.trim();

  if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
    // TODO move out this regex into constants file.
    return newLine + line + newLine;
  }

  const params = {
    content: trimmed,
  };

  const config = {
    configurationMap: this.configurationMap,
    params,
    name: 'paragraph',
    // debug: true,
  };

  // console.log(config);
  const replaced = commonReplace(config);
  const result = newLine + replaced + newLine;

  return result;
}
/// !end function is not working as planned

function _image(text, alt, srcWithTooltip) {
  const src = srcWithTooltip.trim().replace(/\"image_tooltip\"/, '');

  const params = {
    src: src.trim(),
    altText: alt,
  };

  const config = {
    configurationMap: this.configurationMap,
    params,
    name: 'image',
    debug: true,
  };

  this.warnings.images += 1;

  const replaced = commonReplace(config);

  return replaced;
}

function _br(text, newLines) {
  const arrNewLines = newLines.match(new RegExp(newLine, 'g'));

  // TODO well, it's not good. can be improved with lodash
  // I REALLY HATE THIS LINE
  const result = arrNewLines.reduce(
    (acc, current, index) => (index > 0 ? `${acc}<br/>${current}` : current),
    '',
  );

  return result;
}

function _sponsorship(text) {
  // TODO move out this regex into constants file.
  const regex = /\[(.*?)\]/g;

  const regex2 = /[\[\]]/g;

  const [content, href, src] = text
    .match(regex)
    .map((match) => match.replace(regex2, ''));

  const params = {
    src: src.trim(),
    href: href.trim(),
    content: content.trim(),
  };

  const config = {
    configurationMap: this.configurationMap,
    params,
    name: 'sponsor',
    debug: true,
  };
  const replaced = commonReplace(config);
  return replaced;

  // TODO upgrade a way to handle errors in state object
  // eslint-disable-next-line no-unused-expressions
  // this.errors.sponsorshipTop
  //   ? (this.errors.sponsorshipBottom = true)
  //   : (this.errors.sponsorshipTop = true);
}

export { _paragraph, _image, _sponsorship, _br };
