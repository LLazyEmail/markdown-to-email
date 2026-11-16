module.exports = {
  // It suggests that a map from ordinary regex to module names that permit to stub out assets with a single module
  moduleNameMapper: {
    '@root(.*)$': '<rootDir>/src/$1',
    '@domain(.*)$': '<rootDir>/src/domain/$1',
  },
  testMatch: ['<rootDir>/src/tests/**/**/*.test.js'],
  // babel.config.json ignores the test folders, so babel-jest must not be
  // asked to transform them (it throws "Babel ignores ..."). Test files there
  // are plain CommonJS; the src/ modules they require are still transformed.
  transformIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/tests/',
    '<rootDir>/tests/',
    '<rootDir>/src/parserMDReact/tests/',
  ],
};
