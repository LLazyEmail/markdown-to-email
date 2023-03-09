import { writeFileSync } from 'fs';

import {
  writeHTML,
  readSourceFile,
  isFolderExists,
  generateTemplateName,
} from 'markup-generator';

import {
  CONST_FILE_NOT_WRITTEN,
  ERROR_NO_TITLE,
  ERROR_NO_BODY_CONTENT,
  ERROR_NO_PREVIEW_TEXT,
} from './constant-messages';

// eslint-disable-next-line default-param-last
// function writeHTML(fileName, content, dir = 'generated', message) {
//   // @todo it's not an ideal thing
//   // eslint-disable-next-line no-underscore-dangle
//   const _path = `${dir}/${fileName}`;

//   // promise
//   write(_path, content)
//     .then(() => {
//       // i dont like this line @TODO change it
//       // eslint-disable-next-line no-unused-expressions
//       message && console.log(`file has been written successfully${fileName}`);
//     })
//     .catch(() => {
//       // console.log(err)
//       throw new Error(CONST_FILE_NOT_WRITTEN);
//     });
// }

// TODO I think we can delete this method
// __write - an old version of a method that we have
// eslint-disable-next-line no-underscore-dangle
function __write(
  fileName,
  content,
  // eslint-disable-next-line default-param-last
  dir = 'generated',
  message,
) {
  // eslint-disable-next-line no-underscore-dangle
  const _path = `${dir}/${fileName}`; // @todo it's not an ideal thing

  writeFileSync(_path, content, (err) => {
    if (err) {
      throw new Error(CONST_FILE_NOT_WRITTEN);
    }
  });

  // i dont like this line @TODO change it
  // eslint-disable-next-line no-unused-expressions
  message && console.log(`file has been written successfully${fileName}`);
}

// function readSourceFile(fileName) {
//   return readFileSync(fileName, { encoding: 'utf-8' });
// }

// https://www.npmjs.com/package/directory-exists
// https://www.npmjs.com/package/path-exists this is better

// function isFolderExists(dir) {
//   if (!existsSync(dir)) {
//     mkdirSync(dir);
//   }
// }

// can be renamed into a generateFileName
// https://befused.com/javascript/get-filename-url/
// const generateTemplateName = (suffix, ext = 'html') =>
//   `${suffix}-${Date.now()}.${ext}`;

//--------
// const countingBytes = (html) => {
//   const bytes = Buffer.byteLength(html, 'utf8');

//   if (bytes > 1024 * 100) {
//     console.warn( WARNING_EMAIL_LENGTH );
//   }

//   return bytes;
// };

export {
  writeHTML,
  __write,
  readSourceFile,
  isFolderExists,
  generateTemplateName,
  // countingBytes,
  ERROR_NO_TITLE,
  ERROR_NO_BODY_CONTENT,
  ERROR_NO_PREVIEW_TEXT,
};
