import * as constants from 'atherdon-newsletter-constants';
import { ReactCallbacks } from 'atherdon-callbacks';

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
  empty,
  previewText,
  separator
} = ReactCallbacks;


const {
  image,
  paragraphWrapper,
  sponsorship,
  br
} = ReactCallbacks;

const {
  ulList,
  olList
} = ReactCallbacks;





class ReactReplacer {
  constructor(constants) {
    this._constants = constants;

    this.replaceMDBinded = () => {};
    this.replaceMDBindedPreviewText = () => {};

    this.previewText = function () {
      // this.replaceMDBinded(this._constants.REGEXP_PREVIEW_TEXT, previewText);
      this.replaceMDBinded("previewText");
    };

    this.comments = function () {
      // this.replaceMDBinded(this._constants.REGEXP_HTML_COMMENTS, empty);
      this.replaceMDBinded("empty");
    };

    this.strong = function () {
      // this.replaceMDBinded(this._constants.REGEXP_STRONG, strong);
      this.replaceMDBinded("strong");
    };

    this.italic = function () {
      // this.replaceMDBinded(this._constants.REGEXP_EM, italic);
      this.replaceMDBinded("italic");
    };

    this.header = function () {
      // this.replaceMDBinded(this._constants.REGEXP_HEADER, header);
      this.replaceMDBinded("header");
    };

    this.image = function () {
      // this.replaceMDBinded(this._constants.REGEXP_IMAGE, image);
      this.replaceMDBinded("image");
    };

    this.link = function () {
      // this.replaceMDBinded(this._constants.REGEXP_LINK, link);
      this.replaceMDBinded("link");
    };

    this.del = function () {
      // this.replaceMDBinded(this._constants.REGEXP_DEL, del);
      this.replaceMDBinded("del");
    };

    this.q = function () {
      // this.replaceMDBinded(this._constants.REGEXP_Q, q);
      this.replaceMDBinded("q");
    };

    this.code = function () {
      // this.replaceMDBinded(this._constants.REGEXP_CODE, code);
      this.replaceMDBinded("code");
    };

    this.ulList = function () {
      // this.replaceMDBinded(this._constants.REGEXP_UL_LIST, ulList);
      this.replaceMDBinded("ulList");
    };

    this.olList = function () {
      // this.replaceMDBinded(this._constants.REGEXP_OL_LIST, olList);
      this.replaceMDBinded("olList");
    };

    this.blockQuote = function () {
      // this.replaceMDBinded(this._constants.REGEXP_BLOCKQUOTE, blockquote);
      this.replaceMDBinded("blockquote");
    };

    this.hr = function () {
      // this.replaceMDBinded(this._constants.REGEXP_HR, hr);
      this.replaceMDBinded("hr");
    };

    this.paragraph = function () {
      // this.replaceMDBinded(this._constants.REGEXP_PARAGRAPH, paragraphWrapper);
      this.replaceMDBinded("paragraphWrapper");
    };

    this.emptyUl = function () {
      // this.replaceMDBinded(this._constants.REGEXP_EMPTY_UL, empty);
      this.replaceMDBinded("REGEXP_EMPTY_UL");
    };

    this.emptyOl = function () {
      // this.replaceMDBinded(this._constants.REGEXP_EMPTY_OL, empty);
      this.replaceMDBinded("REGEXP_EMPTY_OL");
    };

    this.emptyBlockQuote = function () {
      // this.replaceMDBinded(this._constants.REGEXP_EMPTY_BLOCKQUOTE, newLine);
      this.replaceMDBinded("REGEXP_EMPTY_BLOCKQUOTE");
    };

    this.br = function () {
      // this.replaceMDBinded(this._constants.REGEXP_BR, br);
      this.replaceMDBinded("REGEXP_BR");
    };

    this.sponsorship = function () {
      // this.replaceMDBinded(this._constants.REGEXP_SPONSORSHIP, sponsorship);
      this.replaceMDBinded("sponsorship");
    };

    this.mem = function () {
      // this.replaceMDBinded(this._constants.REGEXP_MEM, mem);
      this.replaceMDBinded("mem");
    };

    this.separator = function () {
      // this.replaceMDBinded(this._constants.REGEXP_SEPARATOR, separator);
      this.replaceMDBinded("separator");
    };
  }


  
  typography(){
    this.strong();
    this.italic();
    // this.em();
    this.header();
    this.image();
    this.link();
    this.del();
    this.q();
    this.code();


    // this.ulList();
    // this.olList();
    // this.blockquote();
    // this.hr();
    // this.paragraph();
    // this.emptyUl();
    // this.emptyOl();
  }


}

export default new ReactReplacer(constants);
