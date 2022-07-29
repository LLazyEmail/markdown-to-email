import { writeHTML, generateTemplateName } from '../write';
import { printMessage } from '../../helper';

export const deliver = (template, name, message) => {
  const fileName = generateTemplateName(name);
  writeHTML(fileName, template);
  printMessage({ message, type: 'green2' });
};
