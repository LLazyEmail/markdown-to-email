// TODO replace it with latest write method, in order to avoid confusion
import { readSourceFile } from 'markup-generator';
import { resolve } from 'path';

//--------------
// --- Typography
import {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_DEL,
  REGEXP_Q,
  REGEXP_CODE,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_BR,
  // REGEXP_EM,
  REGEXP_SPONSORSHIP,
  REGEXP_MEM,
  REGEXP_PREVIEW_TEXT,
  REGEXP_PARAGRAPH,
  REGEXP_SEPARATOR,
} from '../../../constants/index';

import PlainCallbacks from '../../../callbacks/html';

// import replace stuff
// TODO probably move out this method into helpers
const tests_getMarkdownFile = () => {
  const root = resolve(__dirname, '');
  const markdown = readSourceFile(`${root}/content.md`);
  return markdown;
};

const tests_getInnerMarkdownFile = () => {
  const root = resolve(__dirname, '');

  console.log();
  const markdown = readSourceFile(`${root}/content.md`);

  return markdown;
};

const tests_getOutputFolder = () => {
  const outFolder = resolve('src/tests', 'directory', '../_generated');
  return outFolder;
};

// const tests_getReactOutputFolder = () => {
//     const outFolder = resolve('src/tests', 'directory', '../_generated');
//     return outFolder;
// }

export {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_DEL,
  REGEXP_Q,
  REGEXP_CODE,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_BR,
  // REGEXP_EM,
  REGEXP_SPONSORSHIP,
  REGEXP_MEM,
  REGEXP_PREVIEW_TEXT,
  REGEXP_PARAGRAPH,
  REGEXP_SEPARATOR,
  //-------------------------
  readSourceFile,
  //-------------------------
  PlainCallbacks,
  tests_getMarkdownFile,
  tests_getOutputFolder,
  tests_getInnerMarkdownFile,
};
