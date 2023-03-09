import {
  writeHTML,
  readSourceFile,
  isFolderExists,
  generateTemplateName,
} from 'markup-generator';

import {
  // CONST_FILE_NOT_WRITTEN,
  ERROR_NO_TITLE,
  ERROR_NO_BODY_CONTENT,
  ERROR_NO_PREVIEW_TEXT,
} from './constant-messages';
// const countingBytes = (html) => {
//   const bytes = Buffer.byteLength(html, 'utf8');
//   if (bytes > 1024 * 100) {
//     console.warn( WARNING_EMAIL_LENGTH );
//   }
//   return bytes;
// };
export {
  writeHTML,
  readSourceFile,
  isFolderExists,
  generateTemplateName,
  // countingBytes,
  ERROR_NO_TITLE,
  ERROR_NO_BODY_CONTENT,
  ERROR_NO_PREVIEW_TEXT,
};
