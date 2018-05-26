import fs from 'fs';
import yaml from 'js-yaml';

const readThemeYaml = themeFile => {
  try {
    return yaml.safeLoad(fs.readFileSync(themeFile, 'utf8'));
  } catch (e) {
    return undefined;
  }
};

export default readThemeYaml;
