/**
 * A class checks the log filename and remember the outcome of the validation
 */
class LogAnalyzer {
  /** @private {boolean} */
  wasLastFileNameValid_;

  get wasLastFileNameValid() {
    return this.wasLastFileNameValid_;
  }

  /**
   * Check if filename ends with '.slf' case insensitive
   * @param {string} fileName
   */
  isValidLogFileName(fileName) {
    this.wasLastFileNameValid_ = false;
    if (!fileName || fileName.length === 0) {
      throw new Error('fileName has to be provided!');
    }
    if (!fileName.toUpperCase().endsWith('.SLF')) {
      return false;
    }
    this.wasLastFileNameValid_ = true;
    return true;
  }
}

module.exports = LogAnalyzer;
