import { replaceMarkdown } from '../replace-markdown/html/replace-md';

class ReplaceV2 {
  constructor() {
    this.replaceMDBinded = () => {};

    this.methods = [
      { name: 'strong', type: 'replace', arg: 'strong' },
      { name: 'em', type: 'replace', arg: 'italic' },
      { name: 'italicAsterix', type: 'replace', arg: 'italic_asterix' },
      { name: 'header', type: 'template', arg: 'header' },
      { name: 'subtitle', type: 'typography', arg: 'header' },
      { name: 'title', type: 'typography', arg: 'header' },
      { name: 'image', type: 'replace', arg: 'image' },
      { name: 'link', type: 'replace', arg: 'link' },
      { name: 'del', type: 'replace', arg: 'del' },
      { name: 'q', type: 'replace', arg: 'q' },
      { name: 'code', type: 'replace', arg: 'code' },
      { name: 'ul', type: 'replace', arg: 'ulList' },
      { name: 'ol', type: 'replace', arg: 'olList' },
      { name: 'blockquote', type: 'replace', arg: 'blockquote' },
      { name: 'hr', type: 'replace', arg: 'hr' },
      { name: 'paragraph', type: 'replace', arg: 'paragraph' },
      { name: 'br', type: 'replace', arg: 'br' },
      { name: 'previewText', type: 'miscellaneous', arg: 'previewText' },
      { name: 'sponsorship', type: 'miscellaneous', arg: 'sponsorship' },
      { name: 'memes', type: 'miscellaneous', arg: 'memes' },
      { name: 'separator', type: 'miscellaneous', arg: 'separator' },
    ];
  }

  configure(state) {
    this.replaceMDBinded = replaceMarkdown.bind(state);

    this.methods.forEach(({ name }) => {
      if (typeof this[name] === 'function') {
        this[name]();
      }
    });
  }

  miscellaneous() {
    this.br();
    this.sponsorship();
    this.memes();
    this.separator();
  }

  template() {
    this.header();
  }

  typography() {
    this.methods.forEach(({ type, name, arg }) => {
      if (type === 'typography' && name !== 'subtitle' && name !== 'title') {
        this.replaceMDBinded(arg);
      }
    });

    this.subtitle();
    this.title();
    this.header();
  }

  replace() {
    // this.methods.forEach(({ type, name, arg = false }) => {
    this.methods.forEach(({ type, name }) => {
      if (type === 'replace' && typeof this[name] === 'function') {
        this[name]();
      }
    });
  }
}

export default new ReplaceV2();
