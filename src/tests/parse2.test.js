const { write, readSourceFile } = require("../utils");

const {
  strong,
  link,
  blockquote,
  mem,
  header,
  
  
  italic,
  del,
  q,
  code,
  hr,
  empty
} = require("../callbacks-simple");

const {
  image,
  ulList,
  olList,
  paragraphWrapper,
  sponsorship,
  br,
  newLine
} = require("../callbacks");

const { replaceMarkdown, replaceMarkdownPreviewText } = require("../helpers");

const {
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
  REGEXP_PARAGRAPH,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
  REGEXP_BR,
  REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_EM,
  REGEXP_SPONSORSHIP,
  REGEXP_HTML_COMMENTS,
  REGEXP_MEM,
  REGEXP_PREVIEW_TEXT,
} = require("../constants");

const FULL_SOURCE = "source/source-full.md";

const htmlTeamplate  = "src/tests/sorce_full_code_test/test.html"

const correct = readSourceFile(htmlTeamplate)

let markdown = readSourceFile("source/source-full.md");

function parse(source) {
    let markdown = readSourceFile(source);
    
    let state = {
      content: markdown,
      previewText: "",
      warnings: {
        images: 0
      },
      errors: {
        previewText: false,
        sponsorshipTop: false,
        sponsorshipBottom: false,
      }
    };
  
    const replaceMDBinded = replaceMarkdown.bind(state);
    
    const replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);
    
    replaceMDBindedPreviewText(REGEXP_PREVIEW_TEXT);
    
    replaceMDBinded(REGEXP_HTML_COMMENTS, empty);
    
    replaceMDBinded(REGEXP_STRONG, strong);
    
    replaceMDBinded(REGEXP_EM, italic);
    
    replaceMDBinded(REGEXP_HEADER, header);
    
    
    replaceMDBinded(REGEXP_IMAGE, image);
    replaceMDBinded(REGEXP_LINK, link);
    
    replaceMDBinded(REGEXP_DEL, del);
    replaceMDBinded(REGEXP_Q, q);
    replaceMDBinded(REGEXP_CODE, code);
  
    replaceMDBinded(REGEXP_UL_LIST, ulList);
    replaceMDBinded(REGEXP_OL_LIST, olList);
  
    replaceMDBinded(REGEXP_BLOCKQUOTE, blockquote);
  
    replaceMDBinded(REGEXP_HR, hr);
    replaceMDBinded(REGEXP_PARAGRAPH, paragraphWrapper);
    replaceMDBinded(REGEXP_EMPTY_UL, empty);
    replaceMDBinded(REGEXP_EMPTY_OL, empty);
    replaceMDBinded(REGEXP_EMPTY_BLOCKQUOTE, newLine);
    
    replaceMDBinded(REGEXP_BR, br);
    replaceMDBinded(REGEXP_SPONSORSHIP, sponsorship);
    replaceMDBinded(REGEXP_MEM, mem);

    const outFolder = "src/tests/_generated";

    const fileName = "correct.html";

    write(fileName, state.content, outFolder);

    return outFolder +"/" + fileName ;
  }


  describe('tests for all functionality', ()=>{
        test('running parse function', ()=>{
            let block = parse(FULL_SOURCE)

            let checker = readSourceFile(block)

            let correct = readSourceFile(htmlTeamplate)
            
            expect(correct).toBe(checker);
    
        });
    })
