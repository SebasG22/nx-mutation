module.exports = function(config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'yarn',
    testRunner: 'jest',
    jest: {
      config: require('./apps/demo3/jest.config.js')
    },
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    files: [
      './libs/**/*.ts',
      './libs/**/*.html',
      './apps/demo3/src/**/*.ts',
      './apps/demo3/src/**/*.html',
      './apps/demo3/src/**/*.scss',
      './apps/demo3/**/*.json',
      './jest.config.js',
      './tsconfig.json'
    ],
    mutate: ['./apps/demo3/src/app/**/*.ts', '!./apps/demo3/src/**/*.spec.ts'],
    reporters: ['html']
  });
};
