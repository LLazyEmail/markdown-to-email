import { commonReplace } from '../../../domain/replace-wrapper3.0/commonReplace';

// TODO make sense to the text variable
// probably Vadim knows what is doing on here,
// I think he was the person that did all these funcitons.

// SOON CALLBACKS WILL RETURN SETTINGS ONLY
function _strong(text, doubleAsterix, content, asterix) {
  const params = {
    content: `${content + asterix}`,
  };

  const config = {
    configurationMap: this.configurationMap,
    params,

    name: 'strong',
    // debug: true,
  };

  const replaced = commonReplace(config);
  return replaced;
}

export default _strong;
