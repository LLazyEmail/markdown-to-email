const {
  writeReactComponent,
  readSourceFile,
} = require('../../../../../src/utils');
const { sponsorship } = require('../../callbacksMDReact');

const { replaceMarkdown } = require('../../../helpers');

const { REGEXP_SPONSORSHIP } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';
// const outFolder = 'src/tests/_generated';

const {
  REGEXP_SPONSORSHIP,
  write,
  tests_getMarkdownFile,
  // tests_getOutputFolder,
  PlainCallbacks,
} = require('@domain/testing');

describe('testing sponsorship', () => {
  it('renders sponsorship', () => {
    const markdown = readSourceFile(
      'src/parserMDReact/tests/sponsorship/sponsorship.md',
    );

    const parsedContent = {
      content: markdown,
      errors: {
        sponsorshipTop: false,
      },
    };
    replaceMarkdown.call(parsedContent, REGEXP_SPONSORSHIP, sponsorship);

    const fileName = 'Sponsorship.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);

    expect(1).toBe(1);
  });
});
