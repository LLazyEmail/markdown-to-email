const { readFile } = require("./utils");

function replaceMarkdown(regexp, callback, sourceContent) {
  return (sourceContent.content = sourceContent.content.replace(
    regexp,
    callback
  ));
}

function link(text, title, href) {
  // @TODO replace this shit
  return readFile("typography/link")
    .replace("{content}", title.trim())
    .replace("{href}", href.trim());
}

function paragraphWrapper(text, line) {
  debugger;
  var trimmed = line.trim();
  if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
    //@TODO move out this regex into constants file.
    return "\n" + line + "\n";
  }

  // var htmlBlock = readFile('typography/paragraph').replace('{content}', trimmed) + '\n FUCK YOU \n';
  // return htmlBlock;
  return '\n' + readFile("typography/paragraph").replace("{content}", trimmed) + "\n";
}

function ulList(text, item) {
  const listItem = readFile("typography/listItem").replace(
    "{content}",
    item.trim()
  );
  return readFile("typography/list").replace("{content}", listItem);
}

function olList(text, item) {
  return "\n<ol>\n\t<li>" + item.trim() + "</li>\n</ol>";
}

function blockquote(text, tmp, item) {
  return "\n<blockquote>" + item.trim() + "</blockquote>";
}

function image(text, alt, src) {
  // @TODO OMG, it's huuuge
  const parsedSrc =
    src
      .trim()
      .match(/^(?<src>(.*?))\s?((?<quote>")(?<tooltip>.*?)\k<quote>)?$/) || [];

  // something going on here... @TODO
  if (parsedSrc && parsedSrc.groups && parsedSrc.groups.src) {
    return readFile("typography/image")
      .replace("{src}", parsedSrc.groups.src)
      .replace("{altText}", alt);
  }

  return readFile("typography/image")
    .replace("{src}", "")
    .replace("{altText}", alt);
}

function header(text, chars, content) {
  var level = chars.length;
  switch (level) {
    case 1:
      return readFile("typography/mainTitle").replace(
        "{content}",
        content.trim()
      );
    case 2: //@TODO ???
    case 3:
      return readFile("typography/subtitle").replace(
        "{content}",
        content.trim()
      );
    default:
      break;
  }
}

function sponsorship(text) {
  const regex = /\[(.*?)\]/g;
  const [src, href, content] = text
    .match(regex)
    .map((match) => match.replace(/[\[\]]/g, ""));

  return readFile("body/promo")
    .replace("{src}", src)
    .replace("{href}", href)
    .replace("{content}", content);
}

function br(text, newLines) {
  return Array.from(newLines).reduce((acc, current, index) => {
    return index > 0 ? acc + "<br>" + current : current;
  }, "");
}

module.exports = {
  replaceMarkdown,

  link,
  paragraphWrapper,
  ulList,
  olList,
  blockquote,
  image,
  header,
  sponsorship,
  br
};
