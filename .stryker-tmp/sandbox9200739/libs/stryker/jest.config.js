module.exports = {
  name: 'stryker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/stryker',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
