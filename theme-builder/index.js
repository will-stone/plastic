#! /usr/bin/env node

const compileTheme = require('./compileTheme');
const fs = require('fs-extra');
const parseArgs = require('minimist');
const path = require('path');
const readYaml = require('./utils/readYaml');
const testTheme = require('./testTheme');

const outDir = parseArgs(process.argv).outDir || '.';

const themeFile = 'theme.yaml';
const theme = readYaml(themeFile);

testTheme(theme);

const config = readYaml(path.resolve(__dirname, 'config.yaml'));

const normalTheme = compileTheme(theme, config);
fs.outputFile(`${outDir}/theme.json`, normalTheme);

const deprioritisedTheme = compileTheme(theme, config, true);
fs.outputFile(
  `${outDir}/theme-deprioritised-punctuation.json`,
  deprioritisedTheme
);
