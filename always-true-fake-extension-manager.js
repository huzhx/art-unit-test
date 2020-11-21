const ExtensionManager = require('./extension-manager');

class AlwaysTrueFakeExtensionManager extends ExtensionManager {
  isValid(filename) {
    return true;
  }
}

module.exports = AlwaysTrueFakeExtensionManager;
