const { parse } = require("./parse");
const { write, readFile } = require("./utils");
const chalk = require("chalk");
const { forEach } = require("lodash");

const FULL_SOURCE = "source/source-full.md";
const CONTENT_SOURCE = "source/source.md";


const { 
    REGEXP_HASH_TAG, REGEXP_LINK_HTTPS, 
    REGEXP_LINK_G, REGEXP_STR_BEGIN, REGEXP_STR_END 
} = require("./constants.js");


const layouts = require("atherdon-newsletter-js-layouts");


switch(process.env.PARSE){
    case "full":
        generate_full_template();
      break;
    case "react":
      //same as default, but with react components instead.
      generate_content_only();
      break;
    default:
      generate_content_only();
}

//@TODO improve with lodash
function checkErrors(errors){
  if (Object.values(errors).includes(false)) {
    for (let errorType in errors) {
      if (!errors[errorType]) {
        console.log(chalk.red(`ERROR source-full.md doesn't has ${errorType}`));
      }
    }
    console.log(chalk.red.bold('The full template has not been parsed!'));
    return true;
  }

  return false;
}

//@TODO improve with lodash
function checkWarnings(warnings){
  for (let warningType in warnings) {
    if (warnings[warningType]) {
      console.log(chalk.yellow(`WARNING source-full.md has ${warnings[warningType]} ${warningType}. Replace it to memes`));
    }
  }
}

// function to clean up links 


// creating function to trak length of removing items 



function checker(begining, ending){
  let argumentsVar = {
    start: begining+1,
    end: begining+ (ending-(begining+1)+2)
  }
  return argumentsVar;
}

// end of this function 

function link_searcher(arg){
  const str = arg.indexOf(REGEXP_STR_BEGIN);
  const end = arg.indexOf(REGEXP_STR_END);
  let arrText = [];
  const iteration = checker(str, end)

  const length = iteration.end-iteration.start;
//@TODO improve with lodash
  for(let i = iteration.start; i < iteration.end; i++){
    arrText.push(arg[i])

    if( i === iteration.end){
      break;
    }
  } 
 
  return arrText.join("");
}



// make content 

function contnet_rewriter(arg){
  let cont = arg.replace(REGEXP_HASH_TAG, " ");
  cont = cont.replace(REGEXP_LINK_G, " ");
  return cont 
}


// end making content 


// checking info how many links left in code 
//and removeing them 


function link_cleaner(fulltext, expr){
  contnet_rewriter(fulltext)

  let link = new RegExp(link_searcher(fulltext),"g");

  let length = (fulltext.match(expr)).length
//@TODO improve with lodash
  for(let i =0; i < length; i++){
      link =  new RegExp(link_searcher(fulltext),"g");
      fulltext = fulltext.replace(link, " ");
  }

  return fulltext;
}


// end of code 


function generate_full_template(){
    let html = readFile("main");

    let { previewText, content, errors, warnings } = parse(FULL_SOURCE);
    

    //let cont = contnet_rewriter(content);


    //let cont = link_cleaner(content, REGEXP_LINK_HTTPS);

  //  cont = link_cleaner(cont, REGEXP_LINK_HTTPS);


    if(checkErrors(errors)) return;
    checkWarnings(warnings);

    html = html.replace("{previewText}", previewText);
    
    html = html.replace("{content}", "<table>" +content+ "</table>");
    const fileName = "full-template" + Date.now() + ".html";
    write(fileName, html);

    console.log(chalk.green("The full template has been parsed successfully!"));
}

function generate_content_only(){
    let html = readFile("main");
   // console.log(html)

    const parsedContent = parse(CONTENT_SOURCE);
    checkWarnings(parsedContent.warnings);

    const fileName = "content" + Date.now() + ".html";
    write(fileName, parsedContent.content);

    console.log(chalk.green.bold("The content has been parsed successfully"));
}

module.exports = {
    checkWarnings, generate_content_only, 
    generate_full_template, checker
};