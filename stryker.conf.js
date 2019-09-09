module.exports = function(config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'yarn',
    testRunner: 'jest',
    jest: {
        config: require('./apps/demo2/jest.config.js'),
    },
    transpilers: ['typescript'],
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    transpilers: [
      'typescript',
  ],
    files: [
      './apps/demo2/src/**/*.ts',
      './apps/demo2/src/**/*.html',
      './apps/demo2/src/**/*.scss',
      './apps/demo2/**/*.json',
    './jest.config.js',
  './tsconfig.json'],
      mutate: [
        './apps/demo2/src/**/*.js',
        '!./apps/demo2/src/**/*.spec.js'

        ]
  });
};
