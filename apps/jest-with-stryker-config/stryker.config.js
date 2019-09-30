module.exports = function(config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'yarn',
    testRunner: 'command',
    commandRunner: { 
      command: "yarn test demo2" 
    },
    plugins: [
      "@stryker-mutator/typescript",
      "@stryker-mutator/jest-runner",
      "@stryker-mutator/html-reporter"
    ],
    coverageAnalysis: 'off',
    files: [ './libs/**/*.ts',
     './libs/**/*.html',
     './apps/demo3/src/**/*.ts',
     './apps/demo3/src/**/*.html',
     './apps/demo3/src/**/*.scss',
     './apps/demo3/*.json',
     './apps/demo3/*.js',
     './*.js',
     './tsconfig.json',
     './package.json',
    ],
    mutate: [ './apps/demo3/src/**/*.ts',
     '!./apps/demo3/src/**/*.spec.ts',
    
    ],
    reporters: ['html']
  });
};
