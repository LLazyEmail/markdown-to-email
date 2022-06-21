import {
  replaceWrapper,
  newLine
} from '../helpers';



function mem(text, src, href, altText) {
  const config = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };

  const replaced = replaceWrapper(
    'image', 
    config
  );


  return replaced;
}



function separator() {
  const config = {};

  const replaced = replaceWrapper(
    'separator',
    config,
  );
  
  const result = newLine + replaced + newLine;
  return result;
}

export {
  mem,
  separator
};
