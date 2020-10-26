const readFile = require('./parseSource');

function link(text, title, href) {
  return readFile('typography/link').replace("{content}", title.trim()).replace("{href}", href.trim())
}

function para(text, line) {
  debugger;
  var trimmed = line.trim();
  if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
    return '\n' + line + '\n';
  }
  return readFile('typography/paragraph').replace('{content}', trimmed);
}

function ulList(text, item) {
  const listItem = readFile('typography/listItem').replace('{content}', item.trim())
  return readFile('typography/list').replace('{content}', listItem);
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
  switch (level) {
    case 1:
      return readFile('typography/mainTitle').replace('{content}', content.trim());
    case 2:
    case 3:
      return readFile('typography/subtitle').replace('{content}', content.trim());
    default:
      break;
  }
}

function sponsorship(text){
  const regex = /\[(.*?)\]/g;
  const [src, href, content] = text.match(regex).map(match => match.replace(/[\[\]]/g, ''));

  return readFile('body/promo')
            .replace('{src}', src)
            .replace('{href}', href)
            .replace('{content}', content)
}

module.exports = {
  link, para, ulList, olList, blockquote, image, header, sponsorship
}