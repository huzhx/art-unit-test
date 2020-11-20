const LogAnalyzer = require('./log-analyzer');

test('test isValidLogFileName()', () => {
  const la = new LogAnalyzer();
  la.isValidLogFileName('badname.foo');
  const result = la.wasLastFileNameValid;
  expect(result).toBeFalsy();
});
