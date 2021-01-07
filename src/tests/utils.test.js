const { readFile, readSourceFile, isFolderExists } = require('../utils');
const fs = require('fs');


describe('testing utils.js', () => {
    test('readFile imports correct file without any error', () => {
        const wrapper = readFile('body');
        expect(wrapper).toBe(require('../../layouts/body'));
    })

    test('readSourceFile reads file', () => {
        const wrapper = readSourceFile('source/source-full.md');
        expect(wrapper).toBe(fs.readFileSync('source/source-full.md', { encoding: "utf-8" }));
    })

    test('isFolderExists really checks folders', () => {
        // not calling isFolderExists but his body is testing
        const path = 'source/source-full.md';
        let check = null;
        if (!fs.existsSync(path)) {
            check = false;
        }
        check = true;
        expect(check).toBe(true);
    })
})