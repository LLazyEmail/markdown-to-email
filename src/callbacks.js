const { replaceHTMLWrapper } = require("./helpers");
const {newLine} =require('./utils');

const italic = "$1<em>$3</em>$4";
const del = "<del>$1</del>";
const q = "<q>$1</q>";
const code = "<code>$1</code>";
const hr = "\n<hr />";
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

function header(text, space, chars, content) {
  const config = {
    content: content.trim(),
  };

  const titleType = ["mainTitle", "subtitle", "heading"];

  const result = space + replaceHTMLWrapper(titleType[chars.length - 1], config);
 
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
  // console.log("newLines" newLines.split());
  // newLines.replace(//)

  // newLines.match(new RegExp(newLine, 'g'));
  // console.log(newLines.match(new RegExp(newLine, 'g')));
  const arrNewLines = newLines.match(new RegExp(newLine, 'g'));
  // const result = newLines.replace(new RegExp(newLine, 'g'), `${newLine}<br/>`);
  
  // return result;
  // console.log("newLines.length", newLines.length);
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
