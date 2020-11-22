/**
 * A class checks the log filename and remember the outcome of the validation
 */
class LogAnalyzer {
  /** @private {boolean} */
  wasLastFileNameValid_;

  /** @private {!ExtensionManager} */
  manager_;

  /**
   * Inject an extension manager
   * @param {!ExtensionManager} extensionManager
   */
  constructor(extensionManager) {
    this.manager_ = extensionManager;
  }

  get wasLastFileNameValid() {
    return this.wasLastFileNameValid_;
  }

  /**
   * Check if filename ends with '.slf' case insensitive
   * @param {string} fileName
   */
  isValidLogFileName(fileName) {
    return this.manager_.isValid(fileName);
  }
}

module.exports = LogAnalyzer;
