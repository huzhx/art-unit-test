const ExtensionManager = require('./extension-manager');

test('test constructor', () => {
  expect(() => {
    new ExtensionManager();
  }).toThrowError('Abstract class cannot be instantiated directly.');
});
