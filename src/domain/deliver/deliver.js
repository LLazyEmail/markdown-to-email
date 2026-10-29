import { writeHTML, generateFileName } from 'markup-generator';
import { printMessage } from '../helper-methods/cli';

export const deliver = (template, name, message) => {
  const fileName = generateFileName(name, 'html');
  writeHTML(fileName, template, 'generated', ''); // writeHTML(fileName, template);
  printMessage({ message, type: 'green2' });
};
