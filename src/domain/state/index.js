import { checkErrors } from '../helper-methods/cli';
import { checkWarnings } from '../helper-methods';

// TODO convert into singleton
const stateInit = (markdown, configurationMap, data = false) => {
  const stateObject = {
    content: markdown,
    data: data || false,
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
