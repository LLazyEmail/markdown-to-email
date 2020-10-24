// from https://gist.github.com/renehamburger/12f14a9bd9297394e5bd
const fs = require('fs');
const readFile = require('./parseSource');

'use strict';

/**
 * Javascript version of https://gist.github.com/jbroadway/2836900
 *
 * Slimdown - A very basic regex-based Markdown parser. Supports the
 * following elements (and can be extended via Slimdown::add_rule()):
 *
 * - Headers
 * - Links
 * - Bold
 * - Emphasis
 * - Deletions
 * - Quotes
 * - Inline code
 * - Blockquotes
 * - Ordered/unordered lists
 * - Horizontal rules
 *
 * Author: Johnny Broadway <johnny@johnnybroadway.com>
 * Website: https://gist.github.com/jbroadway/2836900
 * License: MIT
 */
function Slimdown() {

  // Rules
  this.rules = [
    { regex: /(#+)(.*)/g, replacement: header },                                         // headers
    { regex: /!\[([^\[]+)\]\(([^\)]+)\)/g, replacement: image }, // image
    { regex: /\[([^\[]+)\]\(([^\)]+)\)/g, replacement: '<a href=\'$2\'>$1</a>' },        // hyperlink
    { regex: /(\*\*|__)(.*?)\1/g, replacement: '<strong>$2</strong>' },                  // bold
    // { regex: /(\*|_)(.*?)\1/g, replacement: '<em>$2</em>' },    @FIX insirting it into alt                         // emphasis
    { regex: /\~\~(.*?)\~\~/g, replacement: '<del>$1</del>' },                           // del
    { regex: /\:\"(.*?)\"\:/g, replacement: '<q>$1</q>' },                               // quote
    { regex: /`(.*?)`/g, replacement: '<code>$1</code>' },                               // inline code
    { regex: /\n\*(.*)/g, replacement: ulList },                                         // ul lists
    { regex: /\n[0-9]+\.(.*)/g, replacement: olList },                                   // ol lists
    { regex: /\n(&gt;|\>)(.*)/g, replacement: blockquote },                              // blockquotes
    { regex: /\n-{5,}/g, replacement: '\n<hr />' },                                      // horizontal rule
    { regex: /\n([^\n]+)\n/g, replacement: para },                                       // add paragraphs
    { regex: /<\/ul>\s?<ul>/g, replacement: '' },                                        // fix extra ul
    { regex: /<\/ol>\s?<ol>/g, replacement: '' },                                        // fix extra ol
    { regex: /<\/blockquote><blockquote>/g, replacement: '\n' }                          // fix extra blockquote
  ];

  // Add a rule.
  this.addRule = function (regex, replacement) {
    regex.global = true;
    regex.multiline = false;
    this.rules.push({ regex: regex, replacement: replacement });
  };

  // Render some Markdown into HTML.
  this.render = function (text) {
    text = '\n' + text + '\n';
    this.rules.forEach(function (rule) {
      text = text.replace(rule.regex, rule.replacement);
    });
    return text.trim();
  };

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
    return '\n<ul>\n\t<li>' + item.trim() + '</li>\n</ul>';
  }

  function olList(text, item) {
    return '\n<ol>\n\t<li>' + item.trim() + '</li>\n</ol>';
  }

  function blockquote(text, tmp, item) {
    return '\n<blockquote>' + item.trim() + '</blockquote>';
  }
  function image(text, alt, src) {
    const parsedSrc = src.trim().match(/^(?<src>(.*?))\s?((?<quote>")(?<tooltip>.*?)\k<quote>)?$/) || [];
    if (parsedSrc && parsedSrc.groups && parsedSrc.groups.src)
      return readFile('typography/image')
        .replace('{src}', parsedSrc.groups.src)
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
}

var sd = new Slimdown();

var dir = './generated';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}


const source = fs.readFileSync('./source/source.md', 'utf8');
// console.log(source);


//
//
// sd.render()
//
//
//
//
const just_a_guess = sd.render(source);
var fileName = "content-" + Date.now() + ".html";
fs.writeFile("./generated/xxxxxxx" + fileName, just_a_guess, 'utf8', function (err) {
  if (err) throw new Error('file not written')
  // console.log(newFile);
  console.log('file successfully written ' + fileName)
})
