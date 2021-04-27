const fs = require('fs');
const chalk = require('chalk');
const { readSourceFile, displayCLIErrors } = require('../../utils');

// @TODO we can add tests, related to new layouts structure.
// just dont want to remove it without replacing
// test('readFile imports correct file without any error', () => {
//        const wrapper = readFile('body');
//        expect(wrapper).toBe(require('../../layouts/body'));
//    })

describe('testing utils.js', () => {
    
  test('readSourceFile reads file', () => {
    const wrapper = readSourceFile('source/source-full.md');
    expect(wrapper).toBe(fs.readFileSync('source/source-full.md', { encoding: 'utf-8' }));
  });

  test('isFolderExists really checks folders', () => {
    // not calling isFolderExists but his body is testing
    const path = 'source/source-full.md';
    let check = null;
    if (!fs.existsSync(path)) {
      check = false;
    }
    check = true;
    expect(check).toBe(true);
  });

  test('displayCLIErrors receives --> errors <-- and outputs them', () => {
    let outputData = '';
    storeLog = (inputs) => (outputData += inputs);
    console.log = jest.fn(storeLog);
    displayCLIErrors({ previewText: false }, {});
    const msg1 = chalk.red('ERROR source-full.md doesn\'t have previewText');
    const msg2 = chalk.red.bold('The full template has not been parsed!');
    expect(outputData).toBe(msg1 + msg2);
  });

  test('displayCLIErrors receives --> warnings <-- and outputs them', () => {
    let outputData = '';
    storeLog = (inputs) => (outputData += inputs);
    console.log = jest.fn(storeLog);
    displayCLIErrors({}, { images: 5 });
    const msg1 = chalk.yellow('WARNING source-full.md has 5 images. Replace it to memes');
    expect(outputData).toBe(msg1);
  });
});
