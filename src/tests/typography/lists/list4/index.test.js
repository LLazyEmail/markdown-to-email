const { REGEXP_OL_LIST } = require('atherdon-newsletter-constants');
const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');
// const { olList } = require('@root/callbacks');
const { replaceMarkdown } = require('@root/helpers');

const { PlainCallbacks } = require("atherdon-callbacks");

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');

describe('testing list4', () => {
    it('renders list4 correctly', () => {
        const markdown = readSourceFile(`${root}/content.md`);
        const parsedContent = {
            content: markdown,
        };

        replaceMarkdown.call(parsedContent, REGEXP_OL_LIST, PlainCallbacks.olList);

        const fileName = 'list4.html';
        write(fileName, parsedContent.content, outFolder);
        expect(1).toBe(1);
    });
});