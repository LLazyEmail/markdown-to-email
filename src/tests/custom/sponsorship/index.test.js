const { REGEXP_SPONSORSHIP } = require('atherdon-newsletter-constants');

const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');
const { sponsorship } = require('@root/callbacks');
const { replaceMarkdown } = require('@root/helpers');

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

// const outFolder = 'src/tests/_generated';

describe('testing sponsorship', () => {
  it('renders sponsorship', () => {
    const markdown = readSourceFile(`${root}/sponsorship.md`);
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
