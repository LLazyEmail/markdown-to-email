import { commonReplace } from '../../../domain/replace-wrapper3.0';

// TODO remove unused `text` argument
function _previewText(text, content) {
  const params = {
    content,
  };
  console.log('this', this);
  // TODO figure out a way to handle errors
  // this.errors.previewText = true;

  (() => {
    console.log('this**', this);
  })();

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
