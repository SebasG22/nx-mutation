module.exports = function(config) {
  config.set({
    mutator: 'javascript',
    packageManager: 'yarn',
    reporters: ['html'],
    testRunner: 'jest',
    jest: {
      config: require('/Users/svelasquezg/Documents/personal/mutation-demo/apps/demo/jest.config'),
      projectType: 'angular-cli'
    },
    transpilers: [],
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    mutate: [
      '/Users/svelasquezg/Documents/personal/mutation-demo/apps/demo/src/**/*.ts'
      // '!apps/demo/src/**/*.spec.ts',
      // '!apps/demo/src/test.ts',
      // '!apps/demo/src/environments/*.ts'
    ]
  });
};
