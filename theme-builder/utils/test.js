/* eslint-disable no-console */

const test = (message, condition) => {
  if (condition) {
    console.log(`✅  ${message}`)
  } else {
    console.log(`❌  ${message}`)
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1)
  }
}

module.exports = test
