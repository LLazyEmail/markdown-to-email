// from https://gist.github.com/renehamburger/12f14a9bd9297394e5bd
const fs = require('fs');
const { header, image, link, ulList, olList, blockquote, para } = require('./just-a-guess-functions')
const { write } = require('./utils');

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
    { regex: /\[([^\[]+)\]\(([^\)]+)\)/g, replacement: link },        // hyperlink
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

}

var sd = new Slimdown();

var dir = './generated';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// @TODO replace it with our own method.
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


// OR you can use my new method

// write("./generated/xxxxxxx" + fileName, just_a_guess)
