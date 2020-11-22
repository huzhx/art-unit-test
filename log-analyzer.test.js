const LogAnalyzer = require('./log-analyzer');
const AlwaysTrueFakeExtensionManager = require('./always-true-fake-extension-manager');

test('test isValidLogFileName()', () => {
  const fakeExtensionManager = new AlwaysTrueFakeExtensionManager();
  const la = new LogAnalyzer(fakeExtensionManager);
  const result = la.isValidLogFileName('short.ext');
  expect(result).toBeTruthy();
});
