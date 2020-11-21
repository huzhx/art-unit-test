/**
 * An abstract class that has an abstract method isValid(filename)
 */
class ExtensionManager {
  constructor() {
    if (this.constructor === ExtensionManager) {
      throw new Error('Abstract class cannot be instantiated directly.');
    }
  }

  /**
   * An abstract method
   * @param {string} filename
   */
  isValid(filename) {
    throw new Error('Abstract method has no implementation');
  }
}

module.exports = ExtensionManager;
