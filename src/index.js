/* eslint-disable unicorn/no-process-exit -- required to exit from error */

import { promises as fs } from 'fs'
import prettier from 'prettier'

import { getTheme } from './theme.js'

const theme = getTheme()

await fs.mkdir('./themes', { recursive: true })

try {
  await Promise.all([
    fs.writeFile(
      './themes/master.json',
      prettier.format(JSON.stringify(theme, undefined, 2), {
        parser: 'json',
      }),
    ),
  ])
} catch {
  process.exit(1)
}
