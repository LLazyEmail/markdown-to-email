import { writeHTML, generateTemplateName } from '../write';
import { printMessage } from '../helper-methods/cli';

export const deliver = (template, name, message) => {
  const fileName = generateTemplateName(name);
  writeHTML(fileName, template);
  printMessage({ message, type: 'green2' });
};
