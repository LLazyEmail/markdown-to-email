import {
  // checkWarnings,
  // checkHtml,
  printMessage,
} from '../../helper';

// TODO enable const messages
// import { WARNING_IMAGE_VERSION, ERROR_SOURCE_DONT_HAVE, FULL_TEMPLATE_ERROR, HTML_EMAIL_SUCCESS, HTML_EMAIL_ERROR } from './constants';


function checkWarnings(warnings) {
  forEach(warnings, (index, element) => {
    if (index) {
      const message = `WARNING source.md has ${index} ${element}. Replace it with memes`;

      printMessage(message, 'yellow');
    }
  });
} 

// TODO should we move away checks?
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

function verification(warnings, content = false) {
  // ***
  if (warnings) checkWarnings(warnings);

  // ***
  if (content) checkHtml(content);
}



export { verification, checkWarnings, checkHtml };
