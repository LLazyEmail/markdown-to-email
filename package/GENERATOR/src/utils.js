import {
  readFileSync, writeFileSync, existsSync, mkdirSync
} from 'fs';
import write from 'write';

const CONST_FILE_CREATED = '';
const CONST_FILE_NOT_WRITTEN = '';

const ERROR_NO_TITLE = '`title` is a required option for `renderTemplate`';
const ERROR_NO_BODY_CONTENT = '`bodyContent` is a required option for `renderTemplate`';
const ERROR_NO_PREVIEW_TEXT = '`previewText` is a required option for `renderTemplate`';

const WARNING_EMAIL_LENGTH = `Email output is ${Math.round(bytes / 1024)}KB. ` +
'It is recommended to keep the delivered HTML to smaller ' +
'than 100KB, to avoid getting emails cut off or rejected due to spam.';


function writeHTML(fileName, content, dir = "generated", message) {
  const _path = `${dir}/${fileName}`; // @todo it's not an ideal thing

  // promise
  write(_path, content)
    .then(() => {
      
      // i dont like this line @TODO change it
      message && console.log(`file has been written successfully${fileName}`);
    })
    .catch(err => { 
      // console.log(err) 
      throw new Error('file not written');
    });

}

// writeHTML - an old version of a method that we have
function __write(fileName, content, dir = 'generated', message) {
  const _path = `${dir}/${fileName}`; // @todo it's not an ideal thing

  writeFileSync(_path, content, (err) => {
    if (err) {
      throw new Error('file not written');
    }
  });

  // i dont like this line @TODO change it
  message && console.log(`file has been written successfully${fileName}`);
}

function readSourceFile(fileName) {
  return readFileSync(fileName, { encoding: 'utf-8' });
}

function isFolderExists(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
}

const generateTemplateName = (suffix, ext = 'html') => `${suffix}-${Date.now()}.${ext}`;

//--------
const countingBytes = (html) => {
  const bytes = Buffer.byteLength(html, 'utf8');

  if (bytes > 1024 * 100) {
    console.warn( WARNING_EMAIL_LENGTH );
  }

  return bytes;
};

// if (!title) {
//   throw new Error('`title` is a required option for `renderTemplate`');
// }

// if (!bodyContent) {
//   throw new Error('`bodyContent` is a required option for `renderTemplate`');
// }

// if (!previewText) {
//   throw new Error('`previewText` is a required option for `renderTemplate`');
// }

//-----------

export {
  writeHTML,
  readSourceFile,
  isFolderExists,
  generateTemplateName,
  countingBytes,

  ERROR_NO_TITLE,
  ERROR_NO_BODY_CONTENT,
  ERROR_NO_PREVIEW_TEXT,
};
