const chalk = require('chalk');
const { forEach } = require('lodash');

function checkWarnings(warnings) {  

  forEach(warnings, (index, element) => {
    if (index) {
      const message = `WARNING source.md has ${index} ${element}. Replace it with memes`;
      console.log(chalk.yellow(message));
    }
  });
}

function checkErrors(errors) {
  if (Object.values(errors).includes(false)) {

    // @TODO replace with lodash
    forEach(errors, (_, error) => {
      if (!errors[error]) {
        const message = `ERROR source.md doesn't have ${error}`;
        console.log(chalk.red(message));
      }
    });

    const message = 'The full template has not been parsed!';
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
    console.log(chalk.green("Content has correct html!!!"));
  } else {
    console.log(chalk.yellow("Content has not correct html!!!"));
  }
}


module.exports = {
  displayCLIErrors,
  checkErrors,
  checkWarnings,
  checkHtml
};
