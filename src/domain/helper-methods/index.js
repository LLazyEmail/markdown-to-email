import {
  checkWarnings,
  checkHtml,
  // printMessage,
} from '../../helper';

function verification(warnings, content = false) {
  if (warnings) checkWarnings(warnings);

  if (content) checkHtml(content);
}

export { verification };
