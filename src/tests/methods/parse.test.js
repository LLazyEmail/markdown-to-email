const { parse } = require('../../parse');

const { readSourceFile } = require('../../utils');

// @TODO add it into ults as constants
const markdownContent = readSourceFile('source/source.md');

describe('testing parse.js', () => {
  test('parse should return an object(empty or with parameters)', () => {
    const p = parse(markdownContent);
    expect(typeof p).toBe('object');
  });
});
