const { replaceHTMLWrapper } = require("./helpers");

const italic = "$1<em>$3</em>$4";
const del = "<del>$1</del>";
const q = "<q>$1</q>";
const code = "<code>$1</code>";
const hr = "\n<hr />";
const empty = "";
const newLine = "\n"; 
// const strong = "<strong>$2$3</strong>";

function strong(text, doubleAsterix, content, asterix) {
  const config = { content: `${content + asterix}` };
  const result = replaceHTMLWrapper("strong", config);
  return result;
}

function link(text, title, href) {
  const config = {
    content: title.trim(),
    href: href.trim(),
  };

  const result = replaceHTMLWrapper("link", config);
  return result;
}

function paragraphWrapper(text, line) {
  var trimmed = line.trim();
  if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
    //@TODO move out this regex into constants file.
    return "\n" + line + "\n";
  }

  const config = {
    content: trimmed,
  };
  const result = "\n" + replaceHTMLWrapper("paragraph", config) + "\n";

  return result;
}

function ulList(text, list) {
  //@todo improve this crazy structure.
  const parsedSubListsParts = list.replace(
    /((\s{4}\*(.*?)\n){1,})/g,
    (text, subList) => {
      const parsedSubItem = subList.replace(
        /\s{4}\*(.*?)\n/g,
        (text, subItem) => {
          const config = {
            content: subItem.trim(),
          };

          return `\n${replaceHTMLWrapper("listItem", config)}`;
        }
      );
      const config = {
        content: parsedSubItem + "\n",
      };

      return `\n${replaceHTMLWrapper("list", config)}`;
    }
  );

  const parsedList = parsedSubListsParts.replace(
    /\*(.*?)\n/g,
    (text, listItem) => {
      const config = {
        content: listItem.trim(),
      };

      return `\n${replaceHTMLWrapper("listItem", config)}`;
    }
  );

  const config = {
    content: parsedList + "\n",
  };

  return `\n${replaceHTMLWrapper("list", config)}\n`;
}

function olList(text, item) {
  return "\n<ol>\n\t<li>" + item.trim() + "</li>\n</ol>";
}

function blockquote(text, tmp, item) {
  return "\n<blockquote>" + item.trim() + "</blockquote>";
}

function image(text, alt, srcWithTooltip) {
  const src = srcWithTooltip.trim().replace(/\"image_tooltip\"/, "");

  const config = {
    src: src.trim(),
    altText: alt,
  };

  const result = replaceHTMLWrapper("image", config);
  return result;
}

function mem(text, src, href, altText) {
  const config = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };

  const result = replaceHTMLWrapper("image", config);
  return result;
}

function header(text, chars, content) {
  var level = chars.length;

  const config = {
    content: content.trim(),
  };

  switch (level) {
    case 1:
      return replaceHTMLWrapper("mainTitle", config);
    case 2: // TODO ???
      return replaceHTMLWrapper("subtitle", config);
    case 3:
      return replaceHTMLWrapper("heading", config);
    default:
      break;
  }
}

function sponsorship(text) {
  const regex = /\[(.*?)\]/g;
  const [content, href, src] = text
    .match(regex)
    .map((match) => match.replace(/[\[\]]/g, ""));

  const config = {
    src: src.trim(),
    href: href.trim(),
    content: content.trim(),
  };

  return replaceHTMLWrapper("sponsor", config, "body");
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
  link,
  paragraphWrapper,
  ulList,
  olList,
  blockquote,
  image,
  header,
  sponsorship,
  br,
  strong,
  mem,
  //constants
  italic,
  del,
  q,
  code,
  hr,
  empty,
  newLine
};
