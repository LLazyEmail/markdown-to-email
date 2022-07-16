import { commonReplace } from '../../../domain/replace-wrapper3.0';

export function _sponsorship(markdown_string) {
  // TODO move out this regex into constants file.
  const regex = /\[(.*?)\]/g;

  // TODO move out this regex into constants file.
  const regex2 = /[\[\]]/g;

  const [content, href, src] = markdown_string
    .match(regex)
    // eslint-disable-next-line no-useless-escape
    .map((match) => match.replace(regex2, ''));

  const params = {
    src: src.trim(),
    href: href.trim(),
    content: content.trim(),
  };

  const config = {
    params,
    name: 'sponsorship',
  };

  // TODO upgrade a way to handle errors in state object
  // eslint-disable-next-line no-unused-expressions
  this.errors.sponsorshipTop
    ? (this.errors.sponsorshipBottom = true)
    : (this.errors.sponsorshipTop = true);

  // TODO ITS IMPORTANT TO BE ABLE TO FIND A WAY TO GENERATE AN ERROR
  // AND PASS IT TO THE PREV CALLER.

  const replaced = commonReplace(config);
  return replaced;
}
