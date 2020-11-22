const FakeExtensionManager = require('./fake-extension-manager');

test('test isValid(filename) to be true', () => {
  const fakeExtensionManager = new FakeExtensionManager();
  fakeExtensionManager.willBeValid = true;
  const result = fakeExtensionManager.isValid('somename.ext');
  expect(result).toBeTruthy();
});

test('test isValid(filename) to be false', () => {
  const fakeExtensionManager = new FakeExtensionManager();
  fakeExtensionManager.willBeValid = false;
  const result = fakeExtensionManager.isValid('somename.ext');
  expect(result).toBeFalsy();
});

test('test isValid(filename) to throw error', () => {
  const fakeExtensionManager = new FakeExtensionManager();
  fakeExtensionManager.willThrow = new Error('this is a fake');

  expect(() => {
    fakeExtensionManager.isValid('filename');
  }).toThrowError('this is a fake');
});
