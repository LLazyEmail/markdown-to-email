const { 
    replaceHTMLWrapper,
    newLine 
} = require('./helpers');
// const { newLine } = require('./utils');

function mem(text, src, href, altText) {
  const config = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };

  const result = replaceHTMLWrapper('image', config);
  
  return result;
}

function separator() {
  const config = {};

  var replaced = replaceHTMLWrapper(
    'separator',
    config,
  );
    
  const result = newLine + replaced + newLine;  

//   const result = `${newLine}${replaceHTMLWrapper(
//     'separator',
//     config,
//   )}${newLine}`;

  return result;
}

module.exports = {
  mem,
  separator,
};
