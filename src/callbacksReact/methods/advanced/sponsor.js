// import { newLine } from '../../../domain/helper-methods';

import { commonReplace } from '../../../domain/replace-wrapper3.0/commonReplace';

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

export default _sponsorship;
