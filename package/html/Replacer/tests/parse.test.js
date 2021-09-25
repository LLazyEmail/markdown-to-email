const { isObject } = require('lodash');
const { parse } = require('../../parse');

const { FULL_SOURCE } = require('../../../../src/utils');

describe('testing parse.js', () => {
  const p = parse(FULL_SOURCE);

  test('parse should return an object', () => {
    expect(isObject(p)).toBe(true);
  });

  test('parse should return an object with content key', () => {
    expect(p.hasOwnProperty('content')).toBe(true);
  });

  test('parse should return an object with errors key', () => {
    expect(p.hasOwnProperty('errors')).toBe(true);
  });

  test('parse should return an object with previewText key', () => {
    expect(p.hasOwnProperty('previewText')).toBe(true);
  });

  test('parse should return an object with warnings key', () => {
    expect(p.hasOwnProperty('warnings')).toBe(true);
  });
});
