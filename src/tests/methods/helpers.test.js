const { replaceHTMLWrapper } = require('../../helpers');

describe('test helpers', () => {

  test('replaceHTMLWrapper works correctly', () => {
    const wrapper = replaceHTMLWrapper('strong', { content: 'hello world' });
    expect(wrapper).toBe('<strong style=\"font-weight: bolder;\">hello world</strong>');
  });
  
});
