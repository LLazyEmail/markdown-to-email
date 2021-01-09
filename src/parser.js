const chalk = require("chalk");
const { forEach } = require("lodash");
const layouts = require("atherdon-newsletter-js-layouts");

const { parse } = require("./parse");
const { write, readFile } = require("./utils");


const FULL_SOURCE    = "source/source-full.md";
const CONTENT_SOURCE = "source/source.md";




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

function displayCLIErrors(){
  if(checkErrors(errors)) {
    return;
  } else {
    checkWarnings(warnings);
  }

}

function generate_full_template(){
    let html = readFile("main");

    let {
      previewText,
      content,
      errors,
      warnings
    } = parse(FULL_SOURCE);

    // if(checkErrors(errors)) return;
    // checkWarnings(warnings);

    displayCLIErrors()


    html = html.replace("{previewText}", previewText);
// THIS PART IS PROBABLY BROKEN, ie working not correctly.
    html = html.replace("{content}", content);
// END


    const fileName = "full-template" + Date.now() + ".html";
    write(fileName, html);

    console.log(chalk.green("The full template has been parsed successfully!"));
}

function generate_content_only(){
    let html = readFile("main");

    const parsedContent = parse(CONTENT_SOURCE);
    checkWarnings(parsedContent.warnings);

    const fileName = "content" + Date.now() + ".html";
    write(fileName, parsedContent.content);

    console.log(chalk.green.bold("The content has been parsed successfully"));
}

module.exports = {
    checkWarnings, generate_content_only,
    generate_full_template
};
