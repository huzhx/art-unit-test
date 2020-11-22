const ExtensionManager = require('./extension-manager');

class FakeExtensionManager extends ExtensionManager {
  willBeValid = false;
  willThrow = null;

  isValid(filename) {
    if (this.willThrow !== null) {
      throw this.willThrow;
    }
    return this.willBeValid;
  }
}

module.exports = FakeExtensionManager;
