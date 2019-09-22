module.exports = function(config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'yarn',
    testRunner: 'jest',
    
    jest: {
      config: './apps/demo2/jest.config.js'
    },
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    files: [ './libs/**/*.ts',
     './libs/**/*.html',
     './apps/demo2/src/**/*.ts',
     './apps/demo2/src/**/*.html',
     './apps/demo2/src/**/*.scss',
     './apps/demo2/**/*.json',
     './apps/demo2/jest.config.js',
     './apps/demo2/tsconfig.json',
     './apps/demo2/package.json',
    ],
    mutate: [ './apps/demo2/src/**/*.ts',
     '!./apps/demo2/src/**/*.spec.ts',
    
    ],
    reporters: ['html']
  });
};
