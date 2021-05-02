const { parse } = require('@root/parse');

const { readSourceFile, CONTENT_SOURCE } = require('@root/utils');

const markdownContent = readSourceFile(CONTENT_SOURCE);

describe('testing parse.js', () => {
  test('parse should return an object(empty or with parameters)', () => {
    const p = parse(markdownContent);
    // this expect is generating an error @TODO to figure it out later
    expect(typeof p).toBe('object');
  });
});
