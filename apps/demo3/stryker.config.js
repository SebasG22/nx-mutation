module.exports = function(config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'yarn',
    testRunner: 'jest',
    // jest: {
    //   config: require('/Users/svelasquezg/Documents/personal/mutation-demo/apps/demo3/jest.config.js')
    // },
    plugins: [
      "@stryker-mutator/typescript",
      "@stryker-mutator/jest-runner",
      "@stryker-mutator/html-reporter"
    ],
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    files: [ './libs/**/*.ts',
     './libs/**/*.html',
     './apps/demo3/src/**/*.ts',
     './apps/demo3/src/**/*.html',
     './apps/demo3/src/**/*.scss',
     './apps/demo3/**/*.json',
     './apps/demo3/jest.config.js',
     './apps/demo3/tsconfig.json',
     './apps/demo3/package.json',
    ],
    mutate: [ './apps/demo3/src/**/*.ts',
    "./apps/demo3/src/**/*.html",
     '!./apps/demo3/src/**/*.spec.ts',
    ],
    timeoutMS: 5000000,
    fileLogLevel: "debug",
    logLevel: "debug",
    reporters: ['html']
  });
};
