module.exports = function(config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'yarn',
    reporters: ['html', 'clear-text', 'progress'],
    testRunner: 'command',
    jest: {
      config: require('./jest.config'),
      projectType: 'angular-cli'
    },
    transpilers: [],
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    mutate: [
      'src/**/*.ts',
      '!src/**/*.spec.ts',
      '!src/test.ts',
      '!src/environments/*.ts'
    ]
  });
};
