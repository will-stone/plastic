const fs = require("fs");
const yaml = require("js-yaml");

const readYaml = fileName => {
  try {
    return yaml.safeLoad(fs.readFileSync(fileName, "utf8"));
  } catch (e) {
    return undefined;
  }
};

module.exports = readYaml;
