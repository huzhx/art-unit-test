const AlwaysTrueFakeExtensionManager = require('./always-true-fake-extension-manager');

test('test isValid(filename)', () => {
  const atem = new AlwaysTrueFakeExtensionManager();
  const result = atem.isValid('somename');
  expect(result).toBeTruthy();
});
