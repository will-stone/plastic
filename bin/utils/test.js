const test = (message, condition) => {
  if (condition) {
    console.log(`✅  ${message}`);
  } else {
    console.log(`❌  ${message}`);
    process.exit(1);
  }
};

module.exports = test;
