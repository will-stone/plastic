#! /usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const compileTheme = require('./compileTheme');
const testTheme = require('./testTheme');
const readYaml = require('./utils/readYaml');

const themeFile = 'theme.yaml';
const theme = readYaml(themeFile);

testTheme(theme);

const config = readYaml(path.resolve(__dirname, 'config.yaml'));

const normalTheme = compileTheme(theme, config);
fs.outputFile(`themes/theme.json`, normalTheme);

const deprioritisedTheme = compileTheme(theme, config, true);
fs.outputFile(
  `themes/theme-deprioritised-punctuation.json`,
  deprioritisedTheme
);
