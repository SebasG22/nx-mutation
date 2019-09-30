module.exports = {
  name: 'demo3',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demo3',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ],
  globals: {
    'ts-jest': {
      tsConfig:
        '/Users/svelasquezg/Documents/personal/mutation-demo/apps/demo3/tsconfig.spec.json',
      tsConfig: 'apps/demo3/tsconfig.spec.json',
      diagnostics: {
        warnOnly: true
      },
      stringifyContentPathRegex: '\\.html$',
      astTransformers: ['jest-preset-angular/InlineHtmlStripStylesTransformer']
    }
  },
  roots: ['<rootDir>/apps/demo3'],
  // "setupFilesAfterEnv": [
  //   "<rootDir>/apps/nx-jest-example/src/test-setup.ts"
  // ]
};
