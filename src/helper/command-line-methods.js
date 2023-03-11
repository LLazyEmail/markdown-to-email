/* eslint-disable no-use-before-define */
// TODO should we remake whole state as a class with "frozen" methods?
// TODO enable const messages
// import { WARNING_IMAGE_VERSION, ERROR_SOURCE_DONT_HAVE, FULL_TEMPLATE_ERROR, HTML_EMAIL_SUCCESS, HTML_EMAIL_ERROR } from './constants';
//---------------------
// const ERROR_TITLE = '`title` is a required option for `renderTemplate`'
const checkingTitle = (title) => {
  if (!title) {
    throw new Error('`title` is a required option for `renderTemplate`');
  }
};

// const ERROR_BODY = '`bodyContent` is a required option for `renderTemplate`';
const checkingBodyContent = (bodyContent) => {
  if (!bodyContent) {
    throw new Error('`bodyContent` is a required option for `renderTemplate`');
  }
};

// const ERROR_PREVIEW = '`previewText` is a required option for `renderTemplate`';
const checkingPreviewText = (previewText) => {
  if (!previewText) {
    throw new Error('`previewText` is a required option for `renderTemplate`');
  }
};

// ---

export {
  //-------
  checkingTitle,
  checkingBodyContent,
  checkingPreviewText,
  //----------------
  // stateInit,
};
