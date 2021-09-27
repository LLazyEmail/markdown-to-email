// const {
//   REGEXP_HEADER,
//   REGEXP_IMAGE,
//   REGEXP_LINK,
//   REGEXP_STRONG,
//   REGEXP_DEL,
//   REGEXP_Q,
//   REGEXP_CODE,
//   REGEXP_UL_LIST,
//   REGEXP_OL_LIST,
//   REGEXP_BLOCKQUOTE,
//   REGEXP_HR,
//   REGEXP_PARAGRAPH,
//   REGEXP_EMPTY_UL,
//   REGEXP_EMPTY_OL,
//   REGEXP_BR,
//   REGEXP_EMPTY_BLOCKQUOTE,
//   REGEXP_EM,
//   REGEXP_SPONSORSHIP,
//   REGEXP_HTML_COMMENTS,
//   REGEXP_MEM,
//   REGEXP_PREVIEW_TEXT,
// } = require('atherdon-newsletter-constants');

// const { write, readSourceFile, FULL_SOURCE } = require('../../utils');
// const { PlainCallbacks, replaceMarkdown, replaceMarkdownPreviewText } = require("atherdon-callbacks");

// const {
//   strong,
//   link,
//   blockquote,
//   mem,
//   header,

//   italic,
//   del,
//   q,
//   code,
//   hr,
//   empty,
//   image,
//   ulList,
//   olList,
//   paragraphWrapper,
//   sponsorship,
//   br,
//   newLine,
// } = PlainCallbacks;

// // const FULL_SOURCE = 'source/source-full.md';

// const markdown = readSourceFile(FULL_SOURCE);

// const { resolve } = require('path');
// // const root = resolve(__dirname, '')
// // const template = resolve(__dirname + '/source_full_code_test/test.html', '');
// // console.log(template);

// // const htmlTeamplate = 'src/tests/source_full_code_test/test.html';
// const htmlTeamplate = resolve(`${__dirname}/source_full_code_test/test.html`, '');

// const correct = readSourceFile(htmlTeamplate);

// function parse(source) {
//   const markdown = readSourceFile(source);

//   const state = {
//     content: markdown,
//     previewText: '',
//     warnings: {
//       images: 0,
//     },
//     errors: {
//       previewText: false,
//       sponsorshipTop: false,
//       sponsorshipBottom: false,
//     },
//   };

//   const replaceMDBinded = replaceMarkdown.bind(state);

//   const replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);

//   replaceMDBindedPreviewText(REGEXP_PREVIEW_TEXT);

//   replaceMDBinded(REGEXP_HTML_COMMENTS, empty);

//   replaceMDBinded(REGEXP_STRONG, strong);

//   replaceMDBinded(REGEXP_EM, italic);

//   replaceMDBinded(REGEXP_HEADER, header);

//   replaceMDBinded(REGEXP_IMAGE, image);
//   replaceMDBinded(REGEXP_LINK, link);

//   replaceMDBinded(REGEXP_DEL, del);
//   replaceMDBinded(REGEXP_Q, q);
//   replaceMDBinded(REGEXP_CODE, code);

//   replaceMDBinded(REGEXP_UL_LIST, ulList);
//   replaceMDBinded(REGEXP_OL_LIST, olList);

//   replaceMDBinded(REGEXP_BLOCKQUOTE, blockquote);

//   replaceMDBinded(REGEXP_HR, hr);
//   replaceMDBinded(REGEXP_PARAGRAPH, paragraphWrapper);
//   replaceMDBinded(REGEXP_EMPTY_UL, empty);
//   replaceMDBinded(REGEXP_EMPTY_OL, empty);
//   replaceMDBinded(REGEXP_EMPTY_BLOCKQUOTE, newLine);

//   replaceMDBinded(REGEXP_BR, br);
//   replaceMDBinded(REGEXP_SPONSORSHIP, sponsorship);
//   replaceMDBinded(REGEXP_MEM, mem);

//   const outFolder = 'src/tests/_generated';

//   const fileName = 'correct.html';

//   write(fileName, state.content, outFolder);

//   return `${outFolder}/${fileName}`;
// }

// describe('tests for all functionality', () => {
//   test('running parse function', () => {
//     const block = parse(FULL_SOURCE);

//     const checker = readSourceFile(block);

//     const correct = readSourceFile(htmlTeamplate);

//     expect(correct).toBe(checker);
//   });
// });
