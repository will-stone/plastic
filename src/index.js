import fs from 'fs-extra';
import compileTheme from './compileTheme';
import testTheme from './testTheme';
import readYaml from './utils/readYaml';

const themeFile = 'theme.yaml';
const theme = readYaml(themeFile);

testTheme(theme);

const config = readYaml('src/config.yaml');

const normalTheme = compileTheme(theme, config);
fs.outputFile(`out/theme.json`, normalTheme);

const deprioritisedTheme = compileTheme(theme, config, true);
fs.outputFile(`out/theme-deprioritised-punctuation.json`, deprioritisedTheme);
