module.exports = function(config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'yarn',
    testRunner: 'command',
    jest: {
      config: require('./apps/demo/jest.config.js'),
      projectType: 'angular-cli'
    },
    transpilers: [],
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    mutate: [
      './src/**/*.ts',
      '!src/**/*.spec.ts',
      '!src/test.ts',
      '!src/environments/*.ts'
    ]
  });
};
