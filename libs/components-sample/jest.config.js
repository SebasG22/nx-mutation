module.exports = {
  name: 'components-sample',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/components-sample',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
