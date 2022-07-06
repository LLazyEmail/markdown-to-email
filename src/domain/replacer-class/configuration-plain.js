import {
    replaceMarkdown,
    // replaceMarkdownPreviewText,
  } from '../domain/replace-markdown/replace-md';
  
  
  
  
  import Replacer from './replace';
  
  function configureReplacer(state) {
    // CAN WE MOVE OUT CALLBACKS INTO REPLACER?????
    Replacer.replaceMDBinded = replaceMarkdown.bind(state);
  
    // I think this version isnt working well
    // Replacer.replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);
  
    // TODO crashed when here in FULL mode, needs to be fixed
    Replacer.previewText();
    // Replacer.replaceMDBindedPreviewText();
    // Replacer.comments();
    // ---
    Replacer.typography();
    Replacer.template();
  
    Replacer.miscellaneous();
  }

  export default configureReplacer;