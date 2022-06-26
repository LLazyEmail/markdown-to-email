//------------------
//---- helper > command-line-methods
import { 
    readSourceFile, 
    checkErrors,
    checkWarnings,
    checkHtml } from '../../helper';

// TODO convert into singleton
const stateInit = (source) => {
    // TODO rename
    const markdown = readSourceFile(source);
    // TODO should we move out state from this file?
  
    const stateObject = {
      content: markdown,
      previewText: '',
      warnings: {
        images: 0,
      },
      errors: {
        previewText: false,
        sponsorshipTop: false,
        sponsorshipBottom: false,
      },
  
      innerCheckErrors() {
        checkErrors(this.errors);
      },
      innerWarnings() {
        checkWarnings(this.warnings);
      },
    };
  
    return stateObject;
  };

  export default stateInit