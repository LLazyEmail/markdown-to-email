import chalk from 'chalk';
import { forEach } from 'lodash';

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

export { checkErrors, printMessage };
