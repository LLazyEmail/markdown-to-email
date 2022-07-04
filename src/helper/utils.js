



import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import write from 'write';

// ---
// const CONST_FILE_CREATED = '';
const CONST_FILE_NOT_WRITTEN = 'file not written';

const ERROR_NO_TITLE = '`title` is a required option for `renderTemplate`';
const ERROR_NO_BODY_CONTENT =
  '`bodyContent` is a required option for `renderTemplate`';
const ERROR_NO_PREVIEW_TEXT =
  '`previewText` is a required option for `renderTemplate`';

// ---

// eslint-disable-next-line default-param-last
function writeHTML(fileName, content, dir = 'generated', message) {
  // eslint-disable-next-line no-underscore-dangle
  const _path = `${dir}/${fileName}`; // @todo it's not an ideal thing

  // promise
  write(_path, content)
    .then(() => {
      // i dont like this line @TODO change it
      // eslint-disable-next-line no-unused-expressions
      message && console.log(`file has been written successfully${fileName}`);
    })
    .catch(() => {
      // console.log(err)
      throw new Error(CONST_FILE_NOT_WRITTEN);
    });
}

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

function readSourceFile(fileName) {
  return readFileSync(fileName, { encoding: 'utf-8' });
}


//------ This file used for back capability purposes
// moving things into 'domain' folder.

import {
  writeHTML,
  __write,
  readSourceFile,
  isFolderExists,
  generateTemplateName,
  // countingBytes,
} from '../domain/write'

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
