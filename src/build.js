#! /usr/bin/env node

const fs = require('fs-extra')
const yaml = require('js-yaml')

function compile({ version, deprioritised = false }) {
  const config = yaml.safeLoad(
    fs.readFileSync(`./src/config-${version}.yaml`, 'utf8'),
  )

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
      if (scopes) {
        scopes.forEach((scope) => {
          acc[scope] = config.palette[color]
        })
      }

      return acc
    },
    theme.colors,
  )

  return JSON.stringify(theme, null, 2)
}

function build({ version }) {
  // Normal
  fs.outputFile(`./themes/${version}.json`, compile({ version }))
  // Deprioritised
  fs.outputFile(
    `./themes/${version}-deprioritised-punctuation.json`,
    compile({ version, deprioritised: true }),
  )
}

/**
 * Build versions
 */
build({ version: 'v2' })
build({ version: 'v3' })
