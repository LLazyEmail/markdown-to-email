
class ReactReplacer {
  constructor(constants) {
    

    this.replaceMDBinded = () => {};
    this.replaceMDBindedPreviewText = () => {};

    this.previewText = function () {

      this.replaceMDBinded("previewText");
    };

    this.comments = function () {

      this.replaceMDBinded("empty");
    };

    this.strong = function () {

      this.replaceMDBinded("strong");
    };

    this.italic = function () {

      this.replaceMDBinded("italic");
    };

    this.header = function () {

      this.replaceMDBinded("header");
    };

    this.image = function () {

      this.replaceMDBinded("image");
    };

    this.link = function () {

      this.replaceMDBinded("link");
    };

    this.del = function () {

      this.replaceMDBinded("del");
    };

    this.q = function () {

      this.replaceMDBinded("q");
    };

    this.code = function () {

      this.replaceMDBinded("code");
    };

    this.ulList = function () {

      this.replaceMDBinded("ulList");
    };

    this.olList = function () {

      this.replaceMDBinded("olList");
    };

    this.blockQuote = function () {

      this.replaceMDBinded("blockquote");
    };

    this.hr = function () {

      this.replaceMDBinded("hr");
    };

    this.paragraph = function () {

      this.replaceMDBinded("paragraphWrapper");
    };

    this.emptyUl = function () {

      this.replaceMDBinded("REGEXP_EMPTY_UL");
    };

    this.emptyOl = function () {

      this.replaceMDBinded("REGEXP_EMPTY_OL");
    };

    this.emptyBlockQuote = function () {

      this.replaceMDBinded("REGEXP_EMPTY_BLOCKQUOTE");
    };

    this.br = function () {

      this.replaceMDBinded("REGEXP_BR");
    };

    this.sponsorship = function () {

      this.replaceMDBinded("sponsorship");
    };

    this.mem = function () {

      this.replaceMDBinded("mem");
    };

    this.separator = function () {

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

export default new ReactReplacer();
