import { commonReplace } from '../../../domain/replace-wrapper3.0/commonReplace';

function _previewText(text, content) {
  const params = {
    content,
  };

  const config = {
    configurationMap: this.configurationMap,
    params,
    name: 'previewText',
    debug: true,
  };

  // this.previewText = true;

  const replaced = commonReplace(config);
  return replaced;
}
export default _previewText;
