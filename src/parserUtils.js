const { readFile } = require('./utils');

function replaceMarkdown(regexp, callback, sourceContent) {
  return sourceContent.content = sourceContent.content.replace(regexp, callback);
}

function replaceHeaders(sourceContent) {
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

  sourceContent.content = sourceContent.content.replace(/(#+)(.*)/g, header);
}

function replaceImages(sourceContent) {
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

  sourceContent.content = sourceContent.content.replace(/!\[([^\[]+)\]\(([^\)]+)\)/g, image);
}

function replaceLinks(sourceContent) {
  function link(text, title, href) {
    return readFile('typography/link').replace("{content}", title.trim()).replace("{href}", href.trim())
  }

  sourceContent.content = sourceContent.content.replace(/\[([^\[]+)\]\(([^\)]+)\)/g, link);
}

function replaceBolds(sourceContent) {
  sourceContent.content = sourceContent.content.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');
}

function replaceDels(sourceContent) {
  sourceContent.content = sourceContent.content.replace(/\~\~(.*?)\~\~/g, '<del>$1</del>');
}

function replaceQ(sourceContent) {
  sourceContent.content = sourceContent.content.replace(/\:\"(.*?)\"\:/g, '<q>$1</q>');
}

function replaceCode(sourceContent) {
  sourceContent.content = sourceContent.content.replace(/`(.*?)`/g, '<code>$1</code>');
}

function replaceULLists(sourceContent) {
  function ulList(text, item) {
    const listItem = readFile('typography/listItem').replace('{content}', item.trim())
    return readFile('typography/list').replace('{content}', listItem);
  }

  sourceContent.content = sourceContent.content.replace(/\n\*(.*)/g, ulList);
}

function replaceOLLIsts(sourceContent) {
  function olList(text, item) {
    return '\n<ol>\n\t<li>' + item.trim() + '</li>\n</ol>';
  }

  sourceContent.content = sourceContent.content.replace(/\n[0-9]+\.(.*)/g, olList);
}

function replaceBlockquotes(sourceContent) {
  function blockquote(text, tmp, item) {
    return '\n<blockquote>' + item.trim() + '</blockquote>';
  }
  sourceContent.content = sourceContent.content.replace(/\n(&gt;|\>)(.*)/g, blockquote);
}

function replaceHRS(sourceContent) {
  sourceContent.content = sourceContent.content.replace(/\n-{5,}/g, '\n<hr />');
}

function replacePairs(sourceContent) {
  function pair(text, line) {
    debugger;
    var trimmed = line.trim();
    if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
      return '\n' + line + '\n';
    }
    return readFile('typography/paragraph').replace('{content}', trimmed);
  }

  sourceContent.content = sourceContent.content.replace(/\n([^\n]+)\n/g, pair);
}

function replaceEmptyULOLTags(sourceContent) {
  sourceContent.content = sourceContent.content.replace(/<\/ul>\s?<ul>/g, '');
  sourceContent.content = sourceContent.content.replace(/<\/ol>\s?<ol>/g, '');
}

function removeBRS(sourceContent) {
  sourceContent.content = sourceContent.content.replace(/<\/div>\n?<br>\n*?<ul/g, '<\/div>\n<ul');
}

function removeBlockquotes(sourceContent) {
  sourceContent.content = sourceContent.content.replace(/<\/blockquote><blockquote>/g, '\n');
}

function replaceEMS(sourceContent) {
  sourceContent.content = sourceContent.content.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');
}

module.exports = {
  replaceHeaders,
  replaceImages,
  replaceLinks,
  replaceBolds,
  replaceDels,
  replaceQ,
  replaceCode,
  replaceULLists,
  replaceOLLIsts,
  replaceBlockquotes,
  replaceHRS,
  replacePairs,
  replaceEmptyULOLTags,
  removeBRS,
  removeBlockquotes,
  replaceEMS,
  replaceMarkdown
}