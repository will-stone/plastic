const test = function(condition) {
  const pass = function(successMsg) {
    if (condition) {
      console.log(`✅  ${successMsg}`);
    }
    return this;
  };

  const fail = function(errorMsg) {
    if (!condition) {
      console.log(`❌  ${errorMsg}`);
      process.exit();
    }
    return this;
  };

  return {
    pass,
    fail,
  };
};

export default test;
