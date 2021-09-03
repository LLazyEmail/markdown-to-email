const chalk = require('chalk');
const { forEach } = require('lodash');

function checkWarnings(warnings) {  

  forEach(warnings, (index, element) => {
    if (index) {
      const message = `WARNING source.md has ${index} ${element}. Replace it with memes`;
      console.log(chalk.yellow(message));
      // printMessage();
    }
  });
}

function checkErrors(errors) {
  if (Object.values(errors).includes(false)) {

    // @TODO replace with lodash
    forEach(errors, (_, error) => {
      if (!errors[error]) {
        const message = `ERROR source.md doesn't have ${error}`;
    
        // printMessage();
        console.log(chalk.red(message));
      }
    });

    const message = 'The full template has not been parsed!';
    // printMessage();
    console.log(chalk.red.bold(message));
    
    return true;
  }
  return false;
}

function displayCLIErrors(errors, warnings) {
  if (checkErrors(errors)) {
    // there should be something in here
  } else {
    checkWarnings(warnings);
  }
}



function checkHtml(content) {
  const searchPattern = new RegExp('(<table|<tr>|<td|<tbody>)', 'i');
  let ind, tempStr = '';

  if (process.env.noAdv) {
    ind = content.indexOf('<h1 class="mc-toc-title"');
  } else {
    ind = content.indexOf('</table></span></span></div>');
  }

  // hmm, it can be a problem
  for (let i = ind; i < ind + 5000; i++) {
    tempStr += content[i];
  }

  if (searchPattern.test(tempStr)) {
    // printMessage();
    console.log(chalk.green("Content has correct html!!!"));
  } else {
    // printMessage();
    console.log(chalk.yellow("Content has not correct html!!!"));
  }
}

function printMessage = ({ message, type }) => {
    
  if (!message) return;
  
  if (type == 'yellow') {
      console.log(chalk.yellow(message));
  }

  if (type == 'red'){
        console.log(chalk.red(message));
  }
  
  if (type == 'red2'){
        console.log(chalk.red.bold(message));
  }
  
  if (type == 'green1'){
        console.log(chalk.green(message));
  }
  if (type == 'green2'){
        console.log(chalk.green.bold(message));
  }
  
}


function stateInit = ( markdown ) => {
  // @TODO should we move out state from this file?
  
  let stateObject = {
    content: markdown,
    previewText: '',
    warnings: {
      images: 0,
    },
    errors: {
      previewText: false,
      sponsorshipTop: false,
      sponsorshipBottom: false,
    },
  };
  
  return stateObject;
}

const MESSAGE_HTML_CONTENT_ONLY = 'The content has been parsed successfully';
const MESSAGE_HTML_FULL_TEMPLATE = 'The full-template has been parsed successfully';
const MESSAGE_HTML_FULL_TEMPLATE2 = 'The full-template has been parsed successfully2';

const MESSAGE_REACT_FULL_TEMPLATE = 'The FullTemplate has been parsed successfully';
const MESSAGE_REACT_CONTENT = 'The Content has been parsed successfully';


module.exports = {
  displayCLIErrors,
  checkErrors,
  checkWarnings,
  checkHtml,
  
  printMessage,
  stateInit,
  

  MESSAGE_HTML_CONTENT_ONLY,
  MESSAGE_HTML_FULL_TEMPLATE,
  MESSAGE_HTML_FULL_TEMPLATE2,

  MESSAGE_REACT_FULL_TEMPLATE,
  MESSAGE_REACT_CONTENT
};
