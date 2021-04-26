const { readSourceFile } = require("../utils");

const{empty} = require("../callbacks-simple");

const { replaceMarkdown, replaceMarkdownPreviewText } = require("../helpers");

const {
  REGEXP_HTML_COMMENTS,
  REGEXP_PREVIEW_TEXT
} = require("atherdon-newsletter-constants");

let markdown = readSourceFile("source/source-full.md");

let staticMarkdown = readSourceFile("source/source-full.md");


let staticState = {
  content: staticMarkdown,
  previewText: "",
  warnings: {
    images: 0
  },
  errors: {
    previewText: false,
    sponsorshipTop: false,
    sponsorshipBottom: false,
  }
}

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

// iterating throught the objects 

function iterator(obj){
  let arr = []
  Object.entries(obj).forEach(item=>{
    arr.push(item)
  })
  return arr
}

// describe tests 

describe('tests for all functionality', ()=>{
// replaceMDBindedPreviewText(REGEXP_PREVIEW_TEXT) tests 
    test('checking preview text functionality ', ()=>{
    
        let check = false;

        replaceMDBindedPreviewText(REGEXP_PREVIEW_TEXT)

        if(REGEXP_PREVIEW_TEXT.length !== 0){
          check = true 
        }

        if(staticState.content.length !== state.content.length){
          check = true
        } else {
          check = false
        }

        if(iterator(state) !== iterator(staticState)){
          check = true
        }
        
        expect(check).toBe(true);

    });
    
    test('function replaceMDBinded will return text without comments ', ()=>{
        let check = false;
        let markdown = readSourceFile("src/tests/sorce_full_code_test/source-fullcodetest.md");

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

        replaceMDBinded(REGEXP_HTML_COMMENTS, empty);

        if(state.content !== this.markdown){
          check = true
        } else {
          check = false 
        }

        expect(check).toBe(true);
    });
})

