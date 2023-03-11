import { writeHTML, generateTemplateName } from 'markup-generator';
import { printMessage } from '../../helper';

export const deliver = (template, name, message) => {
  const fileName = generateTemplateName(name, 'html');
  writeHTML(fileName, template, 'generated', ''); // writeHTML(fileName, template);
  printMessage({ message, type: 'green2' });
};
