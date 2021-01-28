/* eslint-disable unicorn/no-process-exit -- required to exit from error */

import { promises as fs } from 'fs'

import { getTheme } from './theme.js'

const theme = getTheme()

await fs.mkdir('./themes', { recursive: true })

try {
  await Promise.all([
    fs.writeFile('./themes/new.json', JSON.stringify(theme, undefined, 2)),
  ])
} catch {
  process.exit(1)
}
