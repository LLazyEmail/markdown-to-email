const { readFile } = require("./utils");

function replaceMarkdown(regexp, callback, sourceContent) {
  return (sourceContent.content = sourceContent.content.replace(
    regexp,
    callback
  ));
}

function replaceMarkdownPreviewText(regexp, sourceContent) {
  return (sourceContent.content = sourceContent.content.replace(
    regexp,
    (text, content) => {
      sourceContent.previewText = readFile("body/previewText").replace(
        "{content}",
        content.trim()
      );
      return "";
    }
  ));
}

const italic = "$1<em>$3</em>$4";
// const strong = "<strong>$2$3</strong>";

function strong(text, doubleAsterix, content, asterix) {
  return readFile("typography/strong").replace(
    "{content}",
    `${content + asterix}`
  );
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

function image(text, alt, srcWithTooltip) {
  const src = srcWithTooltip.trim().replace(/\"image_tooltip\"/, "");

  return readFile("typography/image")
    .replace("{src}", src.trim())
    .replace("{altText}", alt);
}

function mem(text, src, href, altText) {
  return readFile("typography/image")
    .replace("{src}", src)
    .replace("{altText}", altText)
    .replace("{href}", href);
}

function header(text, chars, content) {
  var level = chars.length;
  switch (level) {
    case 1:
      return readFile("typography/mainTitle").replace(
        "{content}",
        content.trim()
      );
    case 2: // TODO ???
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
  const [content, href, src] = text
    .match(regex)
    .map((match) => match.replace(/[\[\]]/g, ""));

  return readFile("body/sponsor")
    .replace("{src}", src)
    .replace(/{href}/g, href)
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
  replaceMarkdownPreviewText,
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
  strong,
  mem,
};
