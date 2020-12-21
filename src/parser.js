const { parse } = require("./parse");
const { write, readFile } = require("./utils");
const chalk = require("chalk");
const { forEach } = require("lodash");

const FULL_SOURCE = "source/source-full.md";
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

function checkWarnings(warnings){
  for (let warningType in warnings) {
    if (warnings[warningType]) {
      console.log(chalk.yellow(`WARNING source-full.md has ${warnings[warningType]} ${warningType}. Replace it to memes`));
    }
  }
}

function generate_full_template(){
    let html = readFile("main");
    const { previewText, content, errors, warnings } = parse(FULL_SOURCE);

    if(checkErrors(errors)) return;
    checkWarnings(warnings);

    html = html.replace("{previewText}", previewText);
    html = html.replace("{content}", content);
    const fileName = "full-template" + Date.now() + ".html";
    write(fileName, html);

    console.log(chalk.green("The full template has been parsed successfully!"));
}

function generate_content_only(){
    const parsedContent = parse(CONTENT_SOURCE);
    checkWarnings(parsedContent.warnings);
    const fileName = "content" + Date.now() + ".html";
    write(fileName, parsedContent.content);
    console.log(chalk.green.bold("The content has been parsed successfully"));
}

// if (process.env.PARSE) {
//   let html = readFile("main");
//   const { previewText, content, errors, warnings } = parse(FULL_SOURCE);

//   if(checkErrors(errors)) return;
//   checkWarnings(warnings);

//   html = html.replace("{previewText}", previewText);
//   html = html.replace("{content}", content);
//   const fileName = "full-template" + Date.now() + ".html";
//   write(fileName, html);

//   console.log(chalk.green("The full template has been parsed successfully!"));
// } else {
//   const parsedContent = parse(CONTENT_SOURCE);
//   checkWarnings(parsedContent.warnings);
//   const fileName = "content" + Date.now() + ".html";
//   write(fileName, parsedContent.content);
//   console.log(chalk.green.bold("The content has been parsed successfully"));
// }
