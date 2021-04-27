const { parse } = require('../../parse');

describe('testing parse.js', () => {

  test('parse should return an object(empty or with parameters)', () => {
    const p = parse('source/source.md');
    expect(typeof p).toBe('object');
  });
  
});
