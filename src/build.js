#! /usr/bin/env node

const fs = require('fs-extra')
const yaml = require('js-yaml')
const prettier = require('prettier')

function compile({ version, deprioritised = false }) {
  const config = yaml.load(
    fs.readFileSync(`./src/config-${version}.yaml`, 'utf8'),
  )

  const theme = {
    name: config.name,
    colors: {},
    tokenColors: [],
    semanticTokenColors: {},
    semanticHighlighting: true,
  }

  // Syntax
  for (const [color, scope] of Object.entries(config.default_syntax)) {
    theme.tokenColors.push({
      scope,
      settings: {
        foreground: config.palette[color],
      },
    })
  }

  // Normal / Deprioritised
  for (const [color, scope] of Object.entries(
    deprioritised ? config.deprioritised_syntax : config.normal_syntax,
  )) {
    theme.tokenColors.push({
      scope,
      settings: {
        foreground: config.palette[color],
      },
    })
  }

  // Styles
  for (const [style, scope] of Object.entries(config.styles)) {
    theme.tokenColors.push({
      name: style,
      scope,
      settings: {
        fontStyle: style,
      },
    })
  }

  // Terminal
  for (const [scope, color] of Object.entries(config.terminal)) {
    theme.colors[scope] = config.palette[color]
  }

  // Workbench
  for (const [color, scopes] of Object.entries(config.workbench)) {
    if (scopes) {
      for (const scope of scopes) {
        theme.colors[scope] = config.palette[color]
      }
    }
  }

  return prettier.format(JSON.stringify(theme, undefined, 2), {
    parser: 'json',
  })
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
build({ version: 'master' })
