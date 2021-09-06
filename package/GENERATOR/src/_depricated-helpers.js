function replaceMarkdown(regexp, callback) {
  // console.log('helpers- replace markdown method')
  // console.log(typeof callback)

  let fixedCallbackMethod = false;
  switch (typeof callback) {
    case 'string':
      fixedCallbackMethod = callback;
      break;

    case 'undefined':
      console.log('ERRROROROR HERE!!!!');

      break;

    default:
      fixedCallbackMethod = callback.bind(this);
      break;
  }

  this.content = this.content.replace(regexp, fixedCallbackMethod);
}

// @TODO find out if we really using this method or not?
function replaceMarkdownPreviewText(regexp) {
  const config = {
    content: this.content.trim(),
  };

  /*
  this.previewText = replaceHTMLWrapper(
        "previewText",
        config,
        "body"
      );
      console.log(this.previewText)
 */
  this.errors.previewText = true;

  this.content = this.content.replace(
    regexp,
    () => this.previewText,
  );
}

// TODO update this method. I'm sure it can be improved.
function __parse(source){
  

  // passing content into the state,
  // so we can do our updates step by step and track any errors
  const state = stateInit(source);

  Replacer.replaceMDBinded = replaceMarkdown.bind(state);
  Replacer.replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);

  Replacer.previewText();
  Replacer.replaceMDBindedPreviewText(REGEXP_PREVIEW_TEXT);
  Replacer.comments();



  Replacer.strong();
  Replacer.em();
  Replacer.header();
  Replacer.image();
  Replacer.link();
  Replacer.del();
  Replacer.q();
  Replacer.code();
  Replacer.ul();
  Replacer.ol();
  Replacer.blockquote();
  Replacer.hr();
  Replacer.paragraph();
  Replacer.emptyUl();
  Replacer.emptyOl();

  // this line is generating an error
  Replacer.emptyBlockquote();
  Replacer.br();

  if (!process.env.PARSE === 'noAdv' || process.env.PARSE === 'full') {
    Replacer.sponsorship();
  }

  Replacer.memes();
  Replacer.separator();

  // i'm adding it only because error warning didnt return red stuff
  // checkErrors(state.errors);
  state.innerCheckErrors();

  // console.log(state)

  return state;

}

module.exports = {
  replaceMarkdown,
  replaceMarkdownPreviewText,
};
