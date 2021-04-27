const { parse } = require('../../parse');

const { readSourceFile, CONTENT_SOURCE } = require('../../utils');

const markdownContent = readSourceFile(CONTENT_SOURCE);

describe('testing parse.js', () => {
  test('parse should return an object(empty or with parameters)', () => {
    const p = parse(markdownContent);
    expect(typeof p).toBe('object');
  });
});
