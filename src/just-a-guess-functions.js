const readFile = require('./parseSource');

function link(text, title, href) {
  return readFile('typography/link').replace("{content}", title.trim()).replace("{href}", href.trim())
}
'<a href=\'$2\'>$1</a>'

function para(text, line) {
  debugger;
  var trimmed = line.trim();
  if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
    return '\n' + line + '\n';
  }
  // return '\n<p>' + trimmed + '</p>\n';
  return readFile('typography/paragraph').replace('{content}', trimmed);
}

function ulList(text, item) {
  console.log("item", item);
  console.log("call");
  const listItem = readFile('typography/listItem').replace('{content}', item.trim())
  return readFile('typography/list').replace('{content}', listItem);

  // return '\n<ul>\n\t<li>' + item.trim() + '</li>\n</ul>';
}

function olList(text, item) {
  return '\n<ol>\n\t<li>' + item.trim() + '</li>\n</ol>';
}

function blockquote(text, tmp, item) {
  return '\n<blockquote>' + item.trim() + '</blockquote>';
}
function image(text, alt, src) {
  const parsedSrc = src.trim().match(/^(?<src>(.*?))\s?((?<quote>")(?<tooltip>.*?)\k<quote>)?$/) || [];
  if (parsedSrc && parsedSrc.groups && parsedSrc.groups.src) {
    return readFile('typography/image')
      .replace('{src}', parsedSrc.groups.src)
      .replace('{altText}', alt)
  }
  return readFile('typography/image')
    .replace('{src}', '')
    .replace('{altText}', alt)
}

function header(text, chars, content) {
  var level = chars.length;
  // console.log(content.trim());
  // console.log(readFile('typography/mainTitle').replace('{content}', content.trim()));
  switch (level) {
    case 1:
      return readFile('typography/mainTitle').replace('{content}', content.trim());
      break;
    case 2:
      return readFile('typography/subtitle').replace('{content}', content.trim());
    default:
      break;
  }

  // return '<h' + level + '>' + content.trim() + '</h' + level + '>';
}

// function subtitle (text, chars, content) {
//   var level = chars.length;
//   return readFile('typography/subtitle').replace('{content}', content.trim());
//   // return '<h' + level + '>' + content.trim() + '</h' + level + '>';
// }

module.exports = {
  link, para, ulList, olList, blockquote, image, header
}