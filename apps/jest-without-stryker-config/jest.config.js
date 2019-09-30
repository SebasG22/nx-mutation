module.exports = {
  name: 'demo2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demo2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ],
};
