#!/usr/bin/env ts-node-script

/* eslint-disable unicorn/no-process-exit -- required to exit from error */

import { promises as fs } from 'fs'
import prettier from 'prettier'

import { getMainTheme } from './theme-main.js'
import {
  getDarkPlusExperimentalTheme,
  getDarkPlusTheme,
  getDarkVSTheme,
  getVSTheme,
} from './theme-vs.js'

function prettify(object: unknown) {
  return prettier.format(JSON.stringify(object, undefined, 2), {
    parser: 'json',
  })
}

await fs.mkdir('./themes', { recursive: true })

try {
  await Promise.all([
    fs.writeFile('./themes/main.json', prettify(getMainTheme())),
    fs.writeFile(
      './themes/deprioritised-punctuation.json',
      prettify(getMainTheme(true)),
    ),
    fs.writeFile('./themes/dark_vs.json', prettify(getDarkVSTheme())),
    fs.writeFile('./themes/dark_plus.json', prettify(getDarkPlusTheme())),
    fs.writeFile(
      './themes/dark_plus_experimental.json',
      prettify(getDarkPlusExperimentalTheme()),
    ),
    fs.writeFile('./themes/vs.json', prettify(getVSTheme())),
  ])
} catch {
  process.exit(1)
}
