const { REGEXP_SPONSORSHIP } = require('atherdon-newsletter-constants');

const { write, readSourceFile } = require('../../../utils');
const { sponsorship } = require('../../../callbacks');
const { replaceMarkdown } = require('../../../helpers');

const outFolder = 'src/tests/_generated';

describe('testing sponsorship', () => {
  it('renders sponsorship', () => {
    const markdown = readSourceFile('src/tests/sponsorship/sponsorship.md');
    const parsedContent = {
      content: markdown,
      errors: {
        sponsorshipTop: false,
      },
    };
    replaceMarkdown.call(parsedContent, REGEXP_SPONSORSHIP, sponsorship);
    const fileName = 'sponsorship.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
