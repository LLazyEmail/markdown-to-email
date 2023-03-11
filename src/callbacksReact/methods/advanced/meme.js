// import { newLine } from '../../../domain/helper-methods';

import { commonReplace } from '../../../domain/replace-wrapper3.0/commonReplace';

function _meme(text, src, href, altText) {
  const params = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };

  const config = {
    configurationMap: this.configurationMap,
    params,
    name: 'meme',
    debug: true,
  };

  const replaced = commonReplace(config);
  return replaced;
}

export default _meme;
