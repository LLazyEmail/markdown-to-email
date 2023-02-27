import { commonReplace } from '../../../../domain/replace-wrapper3.0/commonReplace';

// TODO remove unused `text` argument
export function _image(text, alt, srcWithTooltip) {
  // eslint-disable-next-line no-useless-escape
  // TODO img-tooltip-regex was defined in constants but was not replaced here...
  const src = srcWithTooltip.trim().replace(/\"image_tooltip\"/, '');

  const params = {
    src: src.trim(),
    altText: alt,
  };

  const config = {
    configurationMap: this.configurationMap,
    params,
    name: 'image',
    // debug: true,
  };

  // i dont think it will work well
  // eslint-disable-next-line no-plusplus
  this.warnings.images++;

  const replaced = commonReplace(config);
  return replaced;
}

export default _image;
