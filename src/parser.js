const chalk = require("chalk");
const { forEach } = require("lodash");
const layouts = require("atherdon-newsletter-js-layouts");

const { parse, parseFullTHing } = require("./parse");
const { write, readFile, displayCLIErrors, checkWarnings } = require("./utils");


const FULL_SOURCE    = "source/source-full.md";
const CONTENT_SOURCE = "source/source.md";

switch(process.env.PARSE){
    case "full":
        generate_full_template();
      break;
    case "reactContentOnly":
      //same as default, but with react components instead.
      generate_react_content();
      break;
    case "reactFull":
      generate_react_full_template();
    default:
      generate_content_only();
}

function generate_full_template() {
  const parsedContent = parseFullTHing({source: FULL_SOURCE});
  checkWarnings(parsedContent.warnings);

  const fileName = "full-template" + Date.now() + ".html";
  const fullContent = layouts.fullTemplate(parsedContent.content);
  write(fileName, fullContent);

  var message = "The full-template has been parsed successfully";
  console.log(chalk.green.bold(message));
}

function generate_content_react(){
  // const parsedContent = parse(CONTENT_SOURCE);
  // checkWarnings(parsedContent.warnings);

  // const fileName = "content" + Date.now() + ".html";
  // write(fileName, parsedContent.content);

  // var message = "The content has been parsed successfully";
  // console.log(chalk.green.bold(message));
}

function generate_react_full_template(){

}

function generate_content_only(){
    const parsedContent = parse(CONTENT_SOURCE);
    checkWarnings(parsedContent.warnings);

    const fileName = "content" + Date.now() + ".html";
    write(fileName, parsedContent.content);

    var message = "The content has been parsed successfully";
    console.log(chalk.green.bold(message));
}

module.exports = {
    generate_content_only,
    generate_full_template
};
