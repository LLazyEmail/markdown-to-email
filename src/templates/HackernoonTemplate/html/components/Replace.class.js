// @TODO include things from a new module that we have.
// we need to pass all constants somewhere, but not to the replaceWrapper
import { replaceMarkdown } from '../../../../domain/replace-markdown/html/replace-md';

class Replace {
  constructor() {
    this.replaceMDBinded = () => {};
    // I think this version isnt working well
    // Replacer.replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);
    this.strong = () => this.replaceMDBinded('strong');
    this.em = () => this.replaceMDBinded('italic');
    // TODO finish this case
    this.italicAsterix = () => this.replaceMDBinded('italic_asterix');
    // TODO working not ideally, because we have headings & subtitles,
    // so it's confusing a little bit
    this.header = () => this.replaceMDBinded('header');
    this.subtitle = () => this.replaceMDBinded('header');
    this.title = () => this.replaceMDBinded('header');
    //---
    this.image = () => this.replaceMDBinded('image');
    this.link = () => this.replaceMDBinded('link');
    this.del = () => this.replaceMDBinded('del');
    this.q = () => this.replaceMDBinded('q');
    this.code = () => this.replaceMDBinded('code');
    this.ul = () => this.replaceMDBinded('ulList');
    this.ol = () => this.replaceMDBinded('olList');
    this.blockquote = () => this.replaceMDBinded('blockquote');
    this.hr = () => this.replaceMDBinded('hr');
    this.paragraph = () => this.replaceMDBinded('paragraph');
    this.br = () => this.replaceMDBinded('br');
    //-------
    // those methods might get replaced with front-matter
    this.previewText = () => this.replaceMDBinded('previewText');
    this.sponsorship = () => this.replaceMDBinded('sponsorship');
    // here we have a different name
    this.memes = () => this.replaceMDBinded('memes');
    this.separator = () => this.replaceMDBinded('separator');
    // TODO hiding for now, let's fix it after our release
    // this.emptyUl = () => this.replaceMDBinded('REGEXP_EMPTY_UL');
    // this.emptyOl = () => this.replaceMDBinded('REGEXP_EMPTY_OL');
    // this.comments = () => this.replaceMDBinded('');
    // this.emptyBlockquote = () =>
    //   this.replaceMDBinded('REGEXP_EMPTY_BLOCKQUOTE');
  }

  configure(state) {
    this.replaceMDBinded = replaceMarkdown.bind(state);

    // TODO crashed when here in FULL mode, needs to be fixed
    this.previewText();

    // Replacer.comments();
    this.typography();
    this.template();
    this.miscellaneous();
  }

  // TODO I think we need to upgrade this class,
  // in order to match it with our updated logic of organizing components

  // test this part
  miscellaneous() {
    // this line is generating an error
    // TODO fix this
    // this.emptyBlockquote();
    this.br();

    if (!process.env.PARSE === 'noAdv' || process.env.PARSE === 'full') {
      this.sponsorship();
    }
    // might get removed after integration of front-matter
    this.memes();
    this.separator();
  }

  template() {
    this.header();
  }

  typography() {
    this.strong();

    this.em();
    this.italicAsterix();

    this.subtitle();
    this.title();
    // this.header();

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

    // TODO fix this
    // this.emptyUl();
    // this.emptyOl();
  }

  // runConfigure () {

  // }
}

export default new Replace();
