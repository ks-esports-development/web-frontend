const { createCjsPreset } = require('jest-preset-angular/presets');

module.exports = {
  ...createCjsPreset(),

  transform: {
    '^.+\\.(ts|js|mjs)$': 'jest-preset-angular',
  },

  // pnpm + Angular ESM
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],

  moduleNameMapper: {
    '\\.html$': '<rootDir>/src/test/file-mock.js',
    '\\.(css|scss|sass|less)$': '<rootDir>/src/test/file-mock.js',
  },

  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testEnvironment: 'jsdom',
};
