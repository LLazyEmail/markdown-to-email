// This file is just my attempt to simplify 
// a process of reading and debugging our code
// i'm creating a set of methods, that have a simple name.
// it will help us to move forward.
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
  br,
//   newLine,
} = require('./callbacks');

const { newLine } = require('./utils');

function comments(){
   replaceMDBinded(REGEXP_HTML_COMMENTS, empty);
}
function strong(){
   replaceMDBinded(REGEXP_STRONG, strong);
}
function em(){
   replaceMDBinded(REGEXP_EM, italic);
}
function header(){
   replaceMDBinded(REGEXP_HEADER, header);
}
function image(){
   replaceMDBinded(REGEXP_IMAGE, image);
}
function link(){
   replaceMDBinded(REGEXP_LINK, link);
}

function del(){
   replaceMDBinded(REGEXP_DEL, del);
}
function q(){
   replaceMDBinded(REGEXP_Q, q);
}
function code(){
   replaceMDBinded(REGEXP_CODE, code);
}
function ul(){
   replaceMDBinded(REGEXP_UL_LIST, ulList);
}
function ol(){
   replaceMDBinded(REGEXP_OL_LIST, olList);
}
function blockquote(){
   replaceMDBinded(REGEXP_BLOCKQUOTE, blockquote);
}
function hr(){
   replaceMDBinded(REGEXP_HR, hr);
}
function paragraph(){
   replaceMDBinded(REGEXP_PARAGRAPH, paragraphWrapper);
}
function emptyUl(){
   replaceMDBinded(REGEXP_EMPTY_UL, empty);
}
function emptyOl(){
    replaceMDBinded(REGEXP_EMPTY_OL, empty);
}

  
function emptyBlockquote(){
    // this line is generating an error
  replaceMDBinded(REGEXP_EMPTY_BLOCKQUOTE, newLine);
}

function br(){
   replaceMDBinded(REGEXP_BR, br);
}
function sponsorship(){
   replaceMDBinded(REGEXP_SPONSORSHIP, sponsorship);
}
function memes(){
   replaceMDBinded(REGEXP_MEM, mem);
}


module.exports = {

}
 