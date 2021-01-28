/* eslint-disable unicorn/no-process-exit -- required to exit from error */

import { promises as fs } from 'fs'
import prettier from 'prettier'

import { getTheme } from './theme.js'

function prettify(object) {
  return prettier.format(JSON.stringify(object, undefined, 2), {
    parser: 'json',
  })
}

await fs.mkdir('./themes', { recursive: true })

try {
  await Promise.all([
    fs.writeFile('./themes/master.json', prettify(getTheme())),
    fs.writeFile(
      './themes/master-deprioritised-punctuation.json',
      prettify(getTheme(true)),
    ),
  ])
} catch {
  process.exit(1)
}
