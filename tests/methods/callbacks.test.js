const { PlainCallbacks, newLine } = require('atherdon-callbacks');

const {
  paragraphWrapper, ulList, olList,
} = PlainCallbacks;

describe('testing callback.js', () => {
  test('testing what returns `paragraphWrapper`', () => {
    const str = paragraphWrapper('', '<h1>some text</h1>');
    expect(str).toBe(`${newLine}<h1>some text</h1>${newLine}`);
  });

  test('testing what returns `ulList`', () => {
    const str = ulList('', 'some text');
    expect(str).toBe(`${newLine}<ul dir="ltr">some text${newLine}</ul>${newLine}`);
  });

  test('testing what returns `olList`', () => {
    const str = olList('', 'some text');
    expect(str).toBe(`${newLine}<ol>${newLine}\t<li>some text</li>${newLine}</ol>`);
  });
});
