import { replaceMarkdownReact } from '../../../../domain/replace-markdown/react/replace-md';

class Replacer {
  constructor() {
    this.replaceMDBinded = () => {};

    // this.previewText = () => this.replaceMDBinded('previewText');
    this.comments = () => this.replaceMDBinded('empty');
    this.strong = () => this.replaceMDBinded('strong');
    this.italic = () => this.replaceMDBinded('italic');
    this.header = () => this.replaceMDBinded('header');
    this.image = () => this.replaceMDBinded('image');
    this.link = () => this.replaceMDBinded('link');
    // this.del = () => this.replaceMDBinded('del');
    this.q = () => this.replaceMDBinded('q');
    this.code = () => this.replaceMDBinded('code');
    this.ulList = () => this.replaceMDBinded('ulList');
    this.olList = () => this.replaceMDBinded('olList');
    this.blockquote = () => this.replaceMDBinded('blockquote');
    this.hr = () => this.replaceMDBinded('hr');
    this.paragraph = () => this.replaceMDBinded('paragraph');
    // this.emptyUl = () => this.replaceMDBinded('REGEXP_EMPTY_UL');
    // this.emptyOl = () => this.replaceMDBinded('REGEXP_EMPTY_OL');
    // this.emptyBlockQuote = () =>
    //   this.replaceMDBinded('REGEXP_EMPTY_BLOCKQUOTE');
    this.br = () => this.replaceMDBinded('REGEXP_BR');
    this.sponsorship = () => this.replaceMDBinded('sponsorship');
    // this.mem = () =>
    //   this.replaceMDBinded('mem');
    // this.separator = () =>
    //   this.replaceMDBinded('separator');
  }

  configure(state) {
    this.replaceMDBinded = replaceMarkdownReact.bind(state);

    this.typography();
  }

  typography() {
    // this.previewText();
    //---------------
    this.strong();
    this.italic();
    // this.em();
    this.header();
    this.image();
    this.link();
    // this.del();
    this.q();
    this.code();

    // this.ulList();
    // this.olList();
    // this.blockquote();
    // this.hr();
    this.paragraph();
    // this.emptyUl();
    // this.emptyOl();
  }
}

export default new Replacer();
