const { readFile } = require("./utils");

function replaceMarkdown(regexp, callback, sourceContent) {
  return (sourceContent.content = sourceContent.content.replace(
    regexp,
    callback
  ));
}

const italic = "$1<em>$3</em>$4";
// const strong = "<strong>$2$3</strong>";

function strong(text, content, character){
  return readFile('typography/strong').replace('{content}', `${content + character}`)
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
  return (
    "\n" + readFile("typography/paragraph").replace("{content}", trimmed) + "\n"
  );
}

function ulList(text, list) {
  //@todo improve this crazy structure.
  const parsedSubListsParts = list.replace(
    /((\s{4}\*(.*?)\n){1,})/g,
    (text, subList) => {
      const parsedSubItem = subList.replace(
        /\s{4}\*(.*?)\n/g,
        (text, subItem) => {
          return `\n${readFile("typography/listItem").replace(
            "{content}",
            subItem.trim()
          )}`;
        }
      );
      return `\n${readFile("typography/list").replace(
        "{content}",
        parsedSubItem + "\n"
      )}`;
    }
  );

  const parsedList = parsedSubListsParts.replace(
    /\*(.*?)\n/g,
    (text, listItem) => {
      return `\n${readFile("typography/listItem").replace(
        "{content}",
        listItem.trim()
      )}`;
    }
  );

  return `\n${readFile("typography/list").replace(
    "{content}",
    parsedList + "\n"
  )}\n`;
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
  } else {
    return readFile("typography/image")
      .replace("{src}", "")
      .replace("{altText}", alt);
  }
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
      return readFile("typography/subtitle").replace(
        "{content}",
        content.trim()
      );
    case 3:
      return readFile("typography/heading").replace(
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

// function tag_loop(){
//     var arr = {
//         header,
//         content,
//         footer,
//        social,
//         unsub
//     }
//     var completed_HTML = '';
//     _.each(arr,{

//         completed_HTML += element;

//     });
// }

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
  br,
  italic,
  strong
};
