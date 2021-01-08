const { generate_content_only, generate_full_template, 
        checkWarnings, checker } = require('../parser');
const chalk = require("chalk");


describe('test parse.js', () => {
    test('generate_content_only() after being executed returns a console log', () => {
        let outputData = "";
        storeLog = inputs => (outputData += inputs);
        console["log"] = jest.fn(storeLog);
        generate_content_only();
        expect(outputData).toBe(chalk.green.bold('The content has been parsed successfully'));
    });

    test('generate_full_template() after being executed returns a console log', () => {
        let outputData = "";
        storeLog = inputs => (outputData += inputs);
        console["log"] = jest.fn(storeLog);
        generate_full_template();
        expect(outputData).toBe(chalk.green.bold('The full template has been parsed successfully!'));
    });

    test('checkWarnings() works', () => {
        let outputData = "";
        storeLog = inputs => (outputData += inputs);
        console["log"] = jest.fn(storeLog);
        checkWarnings({ error: 'Test'});
        expect(outputData).toBe(chalk.yellow('WARNING source-full.md has Test error. Replace it to memes'));
    });

    test('checkWarnings() works and returns an object', () => {
        const t = checker(2, 5);
        expect(t).toStrictEqual({end: 6, start: 3});
    });
})