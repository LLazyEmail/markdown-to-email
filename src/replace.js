// This file is just my attempt to simplify 
// a process of reading and debugging our code
// i'm creating a set of methods, that have a simple name.
// it will help us to move forward.
const { newLine } = require('./utils');

// const { replaceMarkdown, replaceMarkdownPreviewText } = require('./helpers');

const {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_DEL,
  REGEXP_Q,
  REGEXP_CODE,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_PARAGRAPH,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
  REGEXP_BR,
  REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_EM,
  REGEXP_SPONSORSHIP,
  REGEXP_HTML_COMMENTS,
  REGEXP_MEM,
  REGEXP_PREVIEW_TEXT,
} = require('atherdon-newsletter-constants');

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


// const createState = function(markdown){
//     const state = {
//         content: markdown,
//         previewText: '',
//         warnings: {
//             images: 0,
//         },
//         errors: {
//             previewText: false,
//             sponsorshipTop: false,
//             sponsorshipBottom: false,
//         },
//     };

//     return state;
// }
  

var Replacer = function() {};


// var Replacer = {
//     comments:false,
//     strong:false,
//     em:false,
//     header:false,
//     image:false,
//     link:false,
//     del:false,
//     q:false,
//     code:false,
//     ul:false,
//     ol:false,
//     blockquote:false,
//     hr:false,
//     paragraph:false,
//     emptyUl:false,
//     emptyOl:false,
//     emptyBlockquote:false,
//     br:false,
//     sponsorship:false,
//     memes:false
// };

// Replacer.prototype.replaceMarkdown = function() {}

// Replacer.prototype.replaceMDBindedPreviewText = function() {}
    
Replacer.prototype.replaceMDBinded = function() {}
Replacer.prototype.replaceMDBindedPreviewText = function() {}

Replacer.prototype.comments = function(){
   this.replaceMDBinded(REGEXP_HTML_COMMENTS, empty);
}

Replacer.prototype.strong = function(){
   replaceMDBinded(REGEXP_STRONG, strong);
}

Replacer.prototype.em = function(){
   replaceMDBinded(REGEXP_EM, italic);
}

Replacer.prototype.header = function(){
   replaceMDBinded(REGEXP_HEADER, header);
}

Replacer.prototype.image = function(){
   replaceMDBinded(REGEXP_IMAGE, image);
}

Replacer.prototype.link = function(){
   replaceMDBinded(REGEXP_LINK, link);
}

Replacer.prototype.del = function(){
   replaceMDBinded(REGEXP_DEL, del);
}

Replacer.prototype.q = function(){
   replaceMDBinded(REGEXP_Q, q);
}

Replacer.prototype.code = function(){
   replaceMDBinded(REGEXP_CODE, code);
}

Replacer.prototype.ul = function(){
   replaceMDBinded(REGEXP_UL_LIST, ulList);
}

Replacer.prototype.ol = function(){
   replaceMDBinded(REGEXP_OL_LIST, olList);
}

Replacer.prototype.blockquote = function(){
   replaceMDBinded(REGEXP_BLOCKQUOTE, blockquote);
}

Replacer.prototype.hr = function(){
   replaceMDBinded(REGEXP_HR, hr);
}

Replacer.prototype.paragraph = function(){
   replaceMDBinded(REGEXP_PARAGRAPH, paragraphWrapper);
}

Replacer.prototype.emptyUl = function(){
   replaceMDBinded(REGEXP_EMPTY_UL, empty);
}

Replacer.prototype.emptyOl = function(){
    replaceMDBinded(REGEXP_EMPTY_OL, empty);
}

  
Replacer.prototype.emptyBlockquote = function(){
    // this line is generating an error
  replaceMDBinded(REGEXP_EMPTY_BLOCKQUOTE, newLine);
}

Replacer.prototype.br = function(){
   replaceMDBinded(REGEXP_BR, br);
}
Replacer.prototype.sponsorship = function(){
   replaceMDBinded(REGEXP_SPONSORSHIP, sponsorship);
}


Replacer.prototype.memes = function(){
   replaceMDBinded(REGEXP_MEM, mem);
}


module.exports = new Replacer();