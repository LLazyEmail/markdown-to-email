// Babel ignores src/tests (babel.config.json), so this file uses CommonJS.
// The helper under src/ is transformed by babel-jest as usual.
const { shouldRenderSponsorship } = require('../../helper/sponsorship');

describe('shouldRenderSponsorship', () => {
  it('renders sponsors by default (no PARSE set, start.js treats that as full)', () => {
    expect(shouldRenderSponsorship({})).toBe(true);
  });

  it.each(['full', 'recipesFull', 'reactFull', 'hackernnonFront'])(
    'renders sponsors for PARSE=%s',
    (mode) => {
      expect(shouldRenderSponsorship({ PARSE: mode })).toBe(true);
    },
  );

  it('skips sponsors for PARSE=noAdv (the case the old check could never hit)', () => {
    expect(shouldRenderSponsorship({ PARSE: 'noAdv' })).toBe(false);
  });

  it('skips sponsors when the noAdv env flag is set', () => {
    expect(shouldRenderSponsorship({ PARSE: 'full', noAdv: '1' })).toBe(false);
  });

  it('reads process.env when called without arguments', () => {
    const saved = { PARSE: process.env.PARSE, noAdv: process.env.noAdv };
    try {
      process.env.PARSE = 'noAdv';
      delete process.env.noAdv;
      expect(shouldRenderSponsorship()).toBe(false);
      process.env.PARSE = 'full';
      expect(shouldRenderSponsorship()).toBe(true);
    } finally {
      if (saved.PARSE === undefined) delete process.env.PARSE;
      else process.env.PARSE = saved.PARSE;
      if (saved.noAdv === undefined) delete process.env.noAdv;
      else process.env.noAdv = saved.noAdv;
    }
  });
});
