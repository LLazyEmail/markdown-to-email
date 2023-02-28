// import { newLine } from '../../../domain/helper-methods';
import { commonReplace } from '../../../domain/replace-wrapper3.0/commonReplace';

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
export default _image;
