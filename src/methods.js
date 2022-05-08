// @TODO both layouts things can be moved out from importing it here.

// rename too something else, because we have a mix there
import {
  writeHTML,
  checkWarnings,
  checkHtml,
  printMessage,
  generateTemplateName,
} from 'markup-generator';
import { fullTemplate } from './templates/OuterTemplate';

import { parseFullTHing } from './parse';

const MESSAGE_HTML_FULL_TEMPLATE2 =
  'The full-template has been parsed successfully2';

const deliver = (template, name, message) => {
  const fileName = generateTemplateName(name);
  writeHTML(fileName, template);
  printMessage(message, 'green2');
};

function verification(warnings, content = false) {
  // ***
  if (warnings) checkWarnings(warnings);

  // ***
  if (content) checkHtml(content);
}

function generateFullTemplate2(sourceFile) {
  // should warnings be returned here?
  const { content, warnings, previewText } = parseFullTHing({
    source: sourceFile,
  });

  // ***
  verification(warnings, content);

  //   @TODO HERE WE CAN APPLY THAT PREVIEWTEXT IS EMPTY INSIDE
  // console.log(content);

  // throw new Error("my error message");

  deliver(
    fullTemplate({ content, previewText }),
    'full-template-2',
    MESSAGE_HTML_FULL_TEMPLATE2,
  );
}

export { generateFullTemplate2 };
