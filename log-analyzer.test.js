const LogAnalyzer = require('./log-analyzer');
const FakeExtensionManager = require('./fake-extension-manager');

test('test isValidLogFileName()', () => {
  const fakeExtensionManager = new FakeExtensionManager();
  fakeExtensionManager.willBeValid = true;
  const la = new LogAnalyzer(fakeExtensionManager);
  const result = la.isValidLogFileName('short.ext');
  expect(result).toBeTruthy();
});
