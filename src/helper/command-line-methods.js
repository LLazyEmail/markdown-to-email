/* eslint-disable no-use-before-define */
import chalk from 'chalk';
import { forEach } from 'lodash';


// import { readSourceFile } from './utils';

// TODO should we remake whole state as a class with "frozen" methods?

// const WARNING_IMAGE_VERSION = `WARNING source.md has ${index} ${element}. Replace it with memes`;
// const ERROR_SOURCE_DONT_HAVE = `ERROR source.md doesn't have ${error}`;;

// const FULL_TEMPLATE_ERROR = 'The full template has not been parsed!';
// const HTML_EMAIL_SUCCESS = Content has correct html!!!;
// const HTML_EMAIL_ERROR = 'Content has not correct html!!!';

// import { WARNING_IMAGE_VERSION, ERROR_SOURCE_DONT_HAVE, FULL_TEMPLATE_ERROR, HTML_EMAIL_SUCCESS, HTML_EMAIL_ERROR } from './constants';



function checkWarnings(warnings) {
  forEach(warnings, (index, element) => {
    if (index) {
      const message = `WARNING source.md has ${index} ${element}. Replace it with memes`;

      printMessage(message, 'yellow');
    }
  });
}

function checkErrors(errors) {
  if (Object.values(errors).includes(false)) {
    // TODO replace with lodash
    forEach(errors, (_, error) => {
      if (!errors[error]) {
        const message = `ERROR source.md doesn't have ${error}`;

        printMessage(message, 'red');
      }
    });

    const message = 'The full template has not been parsed!';
    printMessage(message, 'red2');

    return true;
  }
  return false;
}

// move inside...
function displayCLIErrors(errors, warnings) {
  if (checkErrors(errors)) {
    // there should be something in here
  } else {
    checkWarnings(warnings);
  }
}

// @todo should we move away checks?

function checkHtml(content) {
  // eslint-disable-next-line prefer-regex-literals
  const searchPattern = new RegExp('(<table|<tr>|<td|<tbody>)', 'i');

  let ind;
  let tempStr = '';

  if (process.env.noAdv) {
    ind = content.indexOf('<h1 class="mc-toc-title"');
  } else {
    ind = content.indexOf('</table></span></span></div>');
  }

  // hmm, it can be a problem
  // eslint-disable-next-line no-plusplus
  for (let i = ind; i < ind + 5000; i++) {
    tempStr += content[i];
  }

  // we can extend these checks and add more

  if (searchPattern.test(tempStr)) {
    printMessage('Content has correct html!!!', 'green');
  } else {
    printMessage('Content has not correct html!!!', 'yellow');
  }
}

const printMessage = ({ message, type }) => {
  if (!message) return;

  switch (type) {
    case 'yellow':
      console.log(chalk.yellow(message));
      break;
    case 'red':
      console.log(chalk.red(message));
      break;
    case 'red2':
      console.log(chalk.red.bold(message));
      break;
    case 'green1':
      console.log(chalk.green(message));
      break;
    case 'green2':
      console.log(chalk.green.bold(message));
      break;

    default:
      console.log(`Sorry, we are out of ${type}.`);
  }

};

// const ERROR_TITLE = '`title` is a required option for `renderTemplate`'
const checkingTitle = (title) => {
  if (!title) {
    throw new Error('`title` is a required option for `renderTemplate`');
  }
};

// const ERROR_BODY = '`bodyContent` is a required option for `renderTemplate`';
const checkingBodyContent = (bodyContent) => {
  if (!bodyContent) {
    throw new Error('`bodyContent` is a required option for `renderTemplate`');
  }
};

// const ERROR_PREVIEW = '`previewText` is a required option for `renderTemplate`';
const checkingPreviewText = (previewText) => {
  if (!previewText) {
    throw new Error('`previewText` is a required option for `renderTemplate`');
  }
};

// ---

export {
  displayCLIErrors,
  checkErrors,
  checkWarnings,
  checkHtml,
  checkingTitle,
  checkingBodyContent,
  checkingPreviewText,
  printMessage,
  // stateInit,
};
