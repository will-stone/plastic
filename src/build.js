#! /usr/bin/env node

const fs = require('fs-extra')
const yaml = require('js-yaml')

function readYaml(fileName) {
  return yaml.safeLoad(fs.readFileSync(fileName, 'utf8'))
}

const config = readYaml('./src/config.yaml')

function compileTheme(deprioritised = false) {
  const theme = {
    name: '',
    colors: {},
    tokenColors: [],
  }

  theme.name = config.name

  // Syntax
  theme.tokenColors = Object.entries(config.default_syntax).reduce(
    (acc, [color, scope]) => {
      acc.push({
        scope,
        settings: {
          foreground: config.palette[color],
        },
      })
      return acc
    },
    theme.tokenColors,
  )

  // Normal / Deprioritised
  theme.tokenColors = Object.entries(
    deprioritised ? config.deprioritised_syntax : config.normal_syntax,
  ).reduce((acc, [color, scope]) => {
    acc.push({
      scope,
      settings: {
        foreground: config.palette[color],
      },
    })
    return acc
  }, theme.tokenColors)

  // Styles
  theme.tokenColors = Object.entries(config.styles).reduce(
    (acc, [style, scope]) => {
      acc.push({
        name: style,
        scope,
        settings: {
          fontStyle: style,
        },
      })
      return acc
    },
    theme.tokenColors,
  )

  // Terminal
  theme.colors = Object.entries(config.terminal).reduce(
    (acc, [color, scope]) => {
      acc[scope] = config.palette[color]
      return acc
    },
    theme.colors,
  )

  // Workbench
  theme.colors = Object.entries(config.workbench).reduce(
    (acc, [color, scopes]) => {
      scopes.forEach(scope => {
        acc[scope] = config.palette[color]
      })
      return acc
    },
    theme.colors,
  )

  return theme
}

const outDir = './themes'

/**
 * Normal theme
 */

fs.outputFile(`${outDir}/theme.json`, JSON.stringify(compileTheme(), null, 2))

/**
 * Deprioritised theme
 */

fs.outputFile(
  `${outDir}/theme-deprioritised-punctuation.json`,
  JSON.stringify(compileTheme(true), null, 2),
)
