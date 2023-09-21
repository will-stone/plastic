import { promises as fs } from 'node:fs'

import prettier from 'prettier'

import { getMainTheme } from './theme-main.js'

function prettify(object: unknown) {
  return prettier.format(JSON.stringify(object, undefined, 2), {
    parser: 'json',
  })
}

await fs.mkdir('./themes', { recursive: true })

try {
  await Promise.all([
    fs.writeFile('./themes/main.json', await prettify(getMainTheme())),
    fs.writeFile(
      './themes/deprioritised-punctuation.json',
      await prettify(getMainTheme(true)),
    ),
  ])
} catch {
  process.exit(1)
}
