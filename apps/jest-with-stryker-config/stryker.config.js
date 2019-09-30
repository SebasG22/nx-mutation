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
     './apps/jest-with-stryker-config/src/**/*.ts',
     './apps/jest-with-stryker-config/src/**/*.html',
     './apps/jest-with-stryker-config/src/**/*.scss',
     './apps/jest-with-stryker-config/*.json',
     './apps/jest-with-stryker-config/*.js',
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
