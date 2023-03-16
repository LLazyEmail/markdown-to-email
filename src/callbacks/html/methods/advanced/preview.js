import { commonReplace } from '../../../../domain/replace-wrapper3.0/commonReplace';

// TODO remove unused `text` argument
function _previewText(text, content) {
  const params = {
    content,
  };
  // TODO figure out a way to handle errors
  // this.errors.previewText = true;

  const config = {
    configurationMap: this.configurationMap,
    params,
    folder: 'body',
    name: 'previewText',
    // debug: true,
  };

  const replaced = commonReplace(config);
  return replaced;
}

function _previewData(text, content) {
  const params = {
    content,
  };
  // TODO figure out a way to handle errors
  // this.errors.previewText = true;

  const config = {
    configurationMap: this.configurationMap,
    params,
    folder: 'body',
    name: 'previewText',
    // debug: true,
  };

  const replaced = commonReplace(config);
  return replaced;
}

export default _previewText;
