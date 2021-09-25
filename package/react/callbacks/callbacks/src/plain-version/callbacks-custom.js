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

  const result = replaceWrapper('image', config);

  return result;
}

function separator() {
  const config = {};

  const replaced = replaceWrapper(
    'separator',
    config,
  );

  const result = newLine + replaced + newLine;

  //   const result = `${newLine}${replaceWrapper(
  //     'separator',
  //     config,
  //   )}${newLine}`;

  return result;
}

export {
  mem,
  separator,
};
