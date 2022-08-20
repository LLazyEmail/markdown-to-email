import { commonReplace } from '../../../domain/replace-wrapper3.0/commonReplace';

// // TODO remove unused `text` argument
function _meme(text, src, href, altText) {
  const params = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };

  const config = {
    configurationMap: this.configurationMap,
    params,
    name: 'image',
    // debug: true,
  };

  const replaced = commonReplace(config);
  return replaced;
}

export default _meme;
