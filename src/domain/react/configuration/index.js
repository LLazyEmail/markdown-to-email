import { replaceMarkdownReact, Replacer } from '../index';

function configureReplacer(state, isFull) {
  Replacer.replaceMDBinded = replaceMarkdownReact.bind(state);

  // NOTE DON'T CHANGE ORDER OF FUNCTION CALLS
  if (isFull) {
    Replacer.previewText();
  }

  Replacer.comments();
  Replacer.typography();

  Replacer.ulList();
  // TODO UPDATE OLLIST CALLBACK, IT'S NOT WORKING
  //   Replacer.olList()

  // Replacer.blockquote();
  Replacer.hr();
  Replacer.paragraph();

  // TODO CHECK CASES WHEN CONTENT CAN HAVE EMPTY LISTS OR BLOCKQUOTE
  //   Replacer.emptyUl();
  //   Replacer.emptyOl();
  //   Replacer.emptyBlockquote();

  Replacer.br();
  Replacer.sponsorship();
  Replacer.mem();
  Replacer.separator();
}

export default configureReplacer;
