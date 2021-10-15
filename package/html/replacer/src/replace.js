import * as constants from 'atherdon-newsletter-constants';

import { 
  PlainCallbacks, newLine 
} from 'atherdon-callbacks';

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
} = PlainCallbacks;

const {
  ulList,
  olList
} = PlainCallbacks;

const {
  image,
  paragraphWrapper,
  sponsorship,
  br
} = PlainCallbacks;

const { previewText, separator } = PlainCallbacks;

// @TODO include things from a new module that we have.

class Replace {
  constructor(constants) {
    this._constants = constants;

    this.replaceMDBinded = () => { };
    this.replaceMDBindedPreviewText = () => { };

    this.previewText = function () {
      this.replaceMDBinded(this._constants.REGEXP_PREVIEW_TEXT, previewText);
    };

    this.comments = () => {
      this.replaceMDBinded(this._constants.REGEXP_HTML_COMMENTS, empty);
    };

    this.strong = () => {
      this.replaceMDBinded(this._constants.REGEXP_STRONG, strong);
    };

    this.em = () => {
      this.replaceMDBinded(this._constants.REGEXP_EM, italic);
    };

    this.header = () => {
      this.replaceMDBinded(this._constants.REGEXP_HEADER, header);
    };

    this.image = () => {
      this.replaceMDBinded(this._constants.REGEXP_IMAGE, image);
    };

    this.link = () => {
      this.replaceMDBinded(this._constants.REGEXP_LINK, link);
    };

    this.del = () => {
      this.replaceMDBinded(this._constants.REGEXP_DEL, del);
    };

    this.q = () => {
      this.replaceMDBinded(this._constants.REGEXP_Q, q);
    };

    this.code = () => {
      this.replaceMDBinded(this._constants.REGEXP_CODE, code);
    };

    this.ul = () => {
      this.replaceMDBinded(this._constants.REGEXP_UL_LIST, ulList);
    };

    this.ol = () => {
      this.replaceMDBinded(this._constants.REGEXP_OL_LIST, olList);
    };

    this.blockquote = () => {
      this.replaceMDBinded(this._constants.REGEXP_BLOCKQUOTE, blockquote);
    };

    this.hr = () => {
      this.replaceMDBinded(this._constants.REGEXP_HR, hr);
    };

    this.paragraph = () => {
      this.replaceMDBinded(this._constants.REGEXP_PARAGRAPH, paragraphWrapper);
    };

    this.emptyUl = () => {
      this.replaceMDBinded(this._constants.REGEXP_EMPTY_UL, empty);
    };

    this.emptyOl = () => {
      this.replaceMDBinded(this._constants.REGEXP_EMPTY_OL, empty);
    };

    
    this.emptyBlockquote = () => {
      // this line is generating an error
      this.replaceMDBinded(this._constants.REGEXP_EMPTY_BLOCKQUOTE, newLine);
    };

    this.br = function () {
      this.replaceMDBinded(this._constants.REGEXP_BR, br);
    };
    this.sponsorship = function () {
      this.replaceMDBinded(this._constants.REGEXP_SPONSORSHIP, sponsorship);
    };

    this.memes = function () {
      this.replaceMDBinded(this._constants.REGEXP_MEM, mem);
    };

    this.separator = function () {
      this.replaceMDBinded(this._constants.REGEXP_SEPARATOR, separator);
    };
  }

  typography(){
    this.strong();
    this.em();
    this.header();
    this.image();
    this.link();
    this.del();
    this.q();
    this.code();
    this.ul();
    this.ol();
    this.blockquote();
    this.hr();
    this.paragraph();
    this.emptyUl();
    this.emptyOl();
  }

  // test this part
  miscellaneous(){
    
    // this line is generating an error
    this.emptyBlockquote();
    this.br();

    if (!process.env.PARSE === 'noAdv' || process.env.PARSE === 'full') {
      this.sponsorship();
    }

    this.memes();
    this.separator();
  }

}

export default new Replace(constants);
