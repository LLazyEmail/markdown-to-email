const { replaceHTMLWrapper, replaceReactWrapper } = require("../helpers");
const { newLine } = require("../utils");

/// function is not working as planned

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
  //console.log(config);

  return result;
}
/// !end function is not working as planned

function getParsedSubList(subList) {
   return subList.replace(
    new RegExp(`\\s{4}\\*(.*?)${newLine}`, "g"),
    (text, subItem) => {
      const config = {
        content: subItem.trim(),
      };

      return `${newLine + replaceReactWrapper("listItem", config)}`;
    }
  );
}

//@TODO it looks even more crazier than it was 2 months ago
// i'm not suprised that it might get errors(but works fine now)
function ulList(text, list) {
  //@todo improve this crazy structure.
  const parsedSubListsParts = list.replace(
    new RegExp(`((\\s{4}\\*(.*?)${newLine}){1,})`, "g"),
    (text, subList) => {
      const parsedSubItem = getParsedSubList(subList);

      const config = {
        content: parsedSubItem + newLine,
      };

      return `${newLine + replaceReactWrapper("list", config)}`;
    }
  );

  const parsedList = parsedSubListsParts.replace(
    new RegExp(`\\*(.*?)${newLine}`, "g"),
    (text, listItem) => {
      const config = {
        content: listItem.trim(),
      };

      return `${newLine + replaceReactWrapper("listItem", config)}`;
    }
  );

  const config = {
    content: parsedList + newLine,
  };

  return `${newLine + replaceReactWrapper("list", config) + newLine}`;
}

function olList(text, item) {
  return (
    `${newLine}<ol>${newLine}\t<li>` + item.trim() + `</li>${newLine}</ol>`
  );
}

function image(text, alt, srcWithTooltip) {
  const src = srcWithTooltip.trim().replace(/\"image_tooltip\"/, "");

  const config = {
    src: src.trim(),
    altText: alt,
  };

  this.warnings.images++;

  const result = replaceReactWrapper("image", config);
  return result;
}

function br(text, newLines) {
  const arrNewLines = newLines.match(new RegExp(newLine, "g"));

  //@TODO well, it's not good. can be improved with lodash
  const result = arrNewLines.reduce((acc, current, index) => {
    return index > 0 ? acc + "<br/>" + current : current;
  }, "");

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

  //@TODO nope, not good
  this.errors.sponsorshipTop
    ? (this.errors.sponsorshipBottom = true)
    : (this.errors.sponsorshipTop = true);

  return replaceHTMLWrapper("sponsor", config, "body");
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
  paragraphWrapper,
  ulList,
  olList,
  image,
  sponsorship,
  br,
  newLine,
};
