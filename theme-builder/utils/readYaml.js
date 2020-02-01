const fs = require('fs')
const yaml = require('js-yaml')

const readYaml = fileName => {
  return yaml.safeLoad(fs.readFileSync(fileName, 'utf8'))
}

module.exports = readYaml
