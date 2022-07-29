/* eslint-disable no-use-before-define */
import chalk from 'chalk';
import { forEach } from 'lodash';

// import { readSourceFile } from './utils';

// TODO should we remake whole state as a class with "frozen" methods?

import { checkWarnings, checkHtml } from '../domain/helper-methods';

// TODO enable const messages
// import { WARNING_IMAGE_VERSION, ERROR_SOURCE_DONT_HAVE, FULL_TEMPLATE_ERROR, HTML_EMAIL_SUCCESS, HTML_EMAIL_ERROR } from './constants';

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

//---------------------
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
  //-------
  checkingTitle,
  checkingBodyContent,
  checkingPreviewText,
  //----------------
  printMessage,
  // stateInit,
};
