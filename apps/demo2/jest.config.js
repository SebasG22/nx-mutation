module.exports = {
  name: 'demo2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demo2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ],
  globals:
   {"ts-jest":{
       "tsConfig":"/Users/svelasquezg/Documents/personal/mutation-demo/apps/demo2/tsconfig.spec.json",
       tsConfig: 'apps/demo2/tsconfig.spec.json',
       "diagnostics":{
           "warnOnly":true
        },
        stringifyContentPathRegex: '\\.html$',
        "astTransformers":["jest-preset-angular/InlineHtmlStripStylesTransformer"]
        }
    },
    "moduleNameMapper": {
      "@mutation-demo/components-sample": "C:/Users/hcordobab/Downloads/nx-mutation/libs/components-sample/src/index.ts"
      
    },
    // setupFilesAfterEnv: ["/Users/svelasquezg/Documents/personal/mutation-demo/apps/demo2/src/test-setup.ts"] 
};
