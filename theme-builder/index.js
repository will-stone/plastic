#! /usr/bin/env node

const compileTheme = require('./compileTheme')
const fs = require('fs-extra')
const parseArgs = require('minimist')
const path = require('path')
const readYaml = require('./utils/readYaml')
const testTheme = require('./testTheme')

const outDir = parseArgs(process.argv).outDir || './themes'

const theme = readYaml('./theme-builder/theme.yaml')

testTheme(theme) // This will stop the process here if any tests fail.

const config = readYaml(path.resolve(__dirname, 'config.yaml'))

const normalTheme = compileTheme(theme, config)
fs.outputFile(`${outDir}/theme.json`, normalTheme)

const deprioritisedTheme = compileTheme(theme, config, true)
fs.outputFile(
  `${outDir}/theme-deprioritised-punctuation.json`,
  deprioritisedTheme,
)
