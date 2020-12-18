const { replaceHTMLWrapper } = require("./helpers");
const {newLine} =require('./utils');

const italic = "$1<em>$3</em>$4";
const del = "<del>$1</del>";
const q = "<q>$1</q>";
const code = "<code>$1</code>";
const hr = `${newLine}<hr />`;
const empty = "";
// const newLine = "\n"; 
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
    return newLine + line + newLine;
  }

  const config = {
    content: trimmed,
  };
  const result = newLine + replaceHTMLWrapper("paragraph", config) + newLine;

  return result;
}

function ulList(text, list) {
  //@todo improve this crazy structure.
  const parsedSubListsParts = list.replace(
    new RegExp(`((\\s{4}\\*(.*?)${newLine}){1,})`, 'g'),
    (text, subList) => {
      const parsedSubItem = subList.replace(
        new RegExp(`\\s{4}\\*(.*?)${newLine}`, 'g'),
        (text, subItem) => {
          const config = {
            content: subItem.trim(),
          };

          return `${newLine + replaceHTMLWrapper("listItem", config)}`;
        }
      );
      const config = {
        content: parsedSubItem + newLine,
      };

      return `${newLine + replaceHTMLWrapper("list", config)}`;
    }
  );
  const parsedList = parsedSubListsParts.replace(
    new RegExp(`\\*(.*?)${newLine}`, 'g'),
    (text, listItem) => {
      const config = {
        content: listItem.trim(),
      };

      return `${newLine + replaceHTMLWrapper("listItem", config)}`;
    }
  );

  const config = {
    content: parsedList + newLine,
  };
  return `${newLine + replaceHTMLWrapper("list", config) + newLine}`;
}

function olList(text, item) {
  return `${newLine}<ol>${newLine}\t<li>` + item.trim() + `</li>${newLine}</ol>`;
}

function blockquote(text, tmp, item) {
  return `${newLine}<blockquote>` + item.trim() + "</blockquote>";
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
  const config = {
    content: content.trim(),
  };

  const titleType = ["mainTitle", "subtitle", "heading"];

  const result = newLine + replaceHTMLWrapper(titleType[chars.length - 1], config);
 
  return result;
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
  const arrNewLines = newLines.match(new RegExp(newLine, 'g'));
  return arrNewLines.reduce((acc, current, index) => {
    return index > 0 ? acc + "<br/>" + current : current;
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
