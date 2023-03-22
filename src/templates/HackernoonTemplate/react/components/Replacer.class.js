import { replaceMarkdownReact } from '../../../../domain/replace-markdown/react/replace-md';
// const methodsList = [
//     // ---------------
//     { name: '', type: '', arg: '' },
//     { name: '', type: '', arg: '' },
//     { name: '', type: '', arg: '' },
//     { name: '', type: '', arg: '' },
// ];
// const methodsList = [
//   // ---------------
//   { name: 'comments', type: '', arg: 'empty' },
//   { name: 'strong', type: 'typography', arg: 'strong' },
//   { name: 'italic', type: 'typography', arg: 'italic' },
//   { name: 'header', type: 'typography', arg: 'header' },
//   { name: 'image', type: 'typography', arg: 'image' },
//   { name: 'link', type: 'typography', arg: 'link' },
//   // this.del = () => this.replaceMDBinded('del');
//   { name: 'q', type: 'typography', arg: 'q' },
//   { name: 'code', type: 'typography', arg: 'code' },
//   { name: 'ulList', type: '', arg: 'ulList' },
//   { name: 'olList', type: '', arg: 'olList' },
//   { name: 'blockquote', type: '', arg: 'blockquote' },
//   { name: 'hr', type: '', arg: 'hr' },
//   { name: 'paragraph', type: 'typography', arg: 'paragraph' },
//   // this.emptyUl = () => this.replaceMDBinded('REGEXP_EMPTY_UL');
//   // this.emptyOl = () => this.replaceMDBinded('REGEXP_EMPTY_OL');
//   // this.emptyBlockQuote = () =>
//   //   this.replaceMDBinded('REGEXP_EMPTY_BLOCKQUOTE');
//   { name: 'br', type: '', arg: 'REGEXP_BR' },
//   { name: 'sponsorship', type: '', arg: 'sponsorship' },
//   // { name: 'mem', type: '', arg: 'mem' },
//   // { name: 'separator', type: '', arg: 'separator' },
// ];

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
