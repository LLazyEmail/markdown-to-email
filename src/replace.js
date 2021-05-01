// This file is just my attempt to simplify 
// a process of reading and debugging our code
// i'm creating a set of methods, that have a simple name.
// it will help us to move forward.
const { newLine } = require('./utils');

const { replaceMarkdown, replaceMarkdownPreviewText } = require('./helpers');


const {
  strong,
  link,
  blockquote,
  mem,
  header,
  italic,
  del,
  q,
  code,
  hr,
  empty,
} = require('./callbacks-simple');

const {
  image,
  ulList,
  olList,
  paragraphWrapper,
  sponsorship,
  br
} = require('./callbacks');


let replacer = {};

replacer.prototype.comments = function(){
   replaceMDBinded(REGEXP_HTML_COMMENTS, empty);
}

replacer.prototype.strong = function(){
   replaceMDBinded(REGEXP_STRONG, strong);
}

replacer.prototype.em = function(){
   replaceMDBinded(REGEXP_EM, italic);
}

replacer.prototype.header = function(){
   replaceMDBinded(REGEXP_HEADER, header);
}

replacer.prototype.image = function(){
   replaceMDBinded(REGEXP_IMAGE, image);
}

replacer.prototype.link = function(){
   replaceMDBinded(REGEXP_LINK, link);
}

replacer.prototype.del = function(){
   replaceMDBinded(REGEXP_DEL, del);
}

replacer.prototype.q = function(){
   replaceMDBinded(REGEXP_Q, q);
}

replacer.prototype.code = function(){
   replaceMDBinded(REGEXP_CODE, code);
}

replacer.prototype.ul = function(){
   replaceMDBinded(REGEXP_UL_LIST, ulList);
}

replacer.prototype.ol = function(){
   replaceMDBinded(REGEXP_OL_LIST, olList);
}

replacer.prototype.blockquote = function(){
   replaceMDBinded(REGEXP_BLOCKQUOTE, blockquote);
}

replacer.prototype.hr = function(){
   replaceMDBinded(REGEXP_HR, hr);
}

replacer.prototype.paragraph = function(){
   replaceMDBinded(REGEXP_PARAGRAPH, paragraphWrapper);
}

replacer.prototype.emptyUl = function(){
   replaceMDBinded(REGEXP_EMPTY_UL, empty);
}

replacer.prototype.emptyOl = function(){
    replaceMDBinded(REGEXP_EMPTY_OL, empty);
}

  
replacer.prototype.emptyBlockquote = function(){
    // this line is generating an error
  replaceMDBinded(REGEXP_EMPTY_BLOCKQUOTE, newLine);
}

replacer.prototype.br = function(){
   replaceMDBinded(REGEXP_BR, br);
}
replacer.prototype.sponsorship = function(){
   replaceMDBinded(REGEXP_SPONSORSHIP, sponsorship);
}


replacer.prototype.memes = function(){
   replaceMDBinded(REGEXP_MEM, mem);
}


module.exports = replacer;