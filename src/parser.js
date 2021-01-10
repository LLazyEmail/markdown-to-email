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
    case "react":
      //same as default, but with react components instead.
      generate_content_only();
      break;
    default:
      generate_content_only();
}

function generate_full_template(){
    let html = readFile("main");

    let {
      previewText,
      content,
      errors,
      warnings
    } = parse(FULL_SOURCE);

    const testData = parseFullTHing(FULL_SOURCE);
    // console.log(testData);


    // console.log(content)

    // displayCLIErrors(errors, warnings)


    // html = html.replace("{previewText}", previewText);
// THIS PART IS PROBABLY BROKEN, ie working not correctly.
    // html = html.replace("{content}", content);
// END


    // const fileName = "full-template" + Date.now() + ".html";
    // write(fileName, html);

    // var message = "The full template has been parsed successfully!";
    // console.log(chalk.green(message));
}

function generate_content_only(){
    let html = readFile("main");

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
