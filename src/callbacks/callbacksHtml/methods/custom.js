import { replaceWrapper, newLine } from '../helpers';

// TODO remove unused `text` argument
function _meme(text, src, href, altText) {
  
  
  const config = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };



  //REPLACEWRAPPER CAN BECOME REPLACE LITERAL
  const replaced = replaceWrapper(
    'image', config
    );

  return replaced;
}

function _separator() {
  const config = {};




  
  const replaced = replaceWrapper(
    'separator', config
    );

  const result = newLine + replaced + newLine;
  return result;
}

export { _meme, _separator };

