import { checkErrors } from '../helper-methods/cli';
import { checkWarnings } from '../helper-methods';

// TODO convert into singleton
const stateInit = (markdown, configurationMap) => {
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
    configurationMap,
  };

  return stateObject;
};

export default stateInit;
