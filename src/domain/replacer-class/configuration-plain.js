import {
    replaceMarkdown,
    // replaceMarkdownPreviewText,
  } from '../replace-markdown/replace-md';
  
  
   
  import Replacer from '../../parserMDHtml/replace';
  
  function configureReplacer(state) {


    // TODO I propose to move inner things of this method into Replace -> runConfigure()


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