import fs from 'fs';
import yaml from 'js-yaml';

const readYaml = fileName => {
  try {
    return yaml.safeLoad(fs.readFileSync(fileName, 'utf8'));
  } catch (e) {
    return undefined;
  }
};

export default readYaml;
