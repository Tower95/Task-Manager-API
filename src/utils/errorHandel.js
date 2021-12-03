'use strict'
const chalk = require('chalk');
/**
 * Print the error and end the process with a (1)
 * @param {Error} err 
 */
exports.handleFatalError = (err) => {
  console.error(`${chalk.red('[fatal error]')} ${err}`)
  console.error(err.stack)
  process.exit(1)
}

/**
 * Print a expected error, continue the process.
 * @param {Error} err 
 */
exports.handleError = (err) => {
  console.error(`${chalk.red('[error]')} ${err}`)
  console.error(err.stack)
}
