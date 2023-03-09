module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  plugins: ['json', 'require-path-exists'],
  extends: [
    'airbnb-base',
    'plugin:require-path-exists/recommended',
    'plugin:json/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
    requireConfigFile: false,
    sourceType: 'module',
  },
  rules: {
    // 'import/no-unresolved': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'func-names': 0,
    camelcase: 1,
    quotes: 0,
    'comma-dangle': 0,
    'no-useless-escape': 0,
    'no-tabs': 0,
    'no-underscore-dangle': 0, // maybe fix it later and remove _header variables
    'import/no-cycle': 0, // TODO https://github.com/LLazyEmail/markdown-to-email/issues/1286
    'max-len': [
      'error',
      {
        code: 850,
      },
    ],
  },
};
