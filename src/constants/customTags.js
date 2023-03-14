/* eslint-disable prefer-regex-literals */
// https://regex101.com/
const REGEXP_HASH_TAG = new RegExp(
  // eslint-disable-next-line no-control-regex
  '#[~##\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]',
  'g',
);
const REGEXP_LINK_G = new RegExp('Link:', 'g');

const REGEXP_LINK_HTTPS = new RegExp('>https', 'g');

const REGEXP_STR_BEGIN = '>https';
const REGEXP_STR_END = 'f<';

export {
  REGEXP_HASH_TAG,
  REGEXP_LINK_HTTPS,
  REGEXP_LINK_G,
  REGEXP_STR_BEGIN,
  REGEXP_STR_END,
};
