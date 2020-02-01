const tinycolor = require('tinycolor2')
const myTest = require('./utils/test')

const testTheme = theme => {
  myTest('theme.yaml', theme)

  const { name, palette, terminal, syntax, ui } = theme

  myTest('Name', name && typeof name === 'string')

  myTest('Name begins with "Plastic"', name.startsWith('Plastic'))

  myTest('Palette', palette && typeof palette === 'object')

  Object.keys(palette).forEach(colourName => {
    const hex = palette[colourName]
    const isString = typeof hex === 'string'
    const colourFormat = tinycolor(hex).getFormat()
    const isHex = colourFormat === 'hex' || colourFormat === 'hex8'
    myTest(`- ${colourName}`, hex && isString && isHex)
  })

  myTest(
    'Terminal',
    terminal &&
      typeof terminal === 'object' &&
      Object.keys(terminal).length === 16,
  )
  ;[
    'black',
    'blue',
    'cyan',
    'green',
    'magenta',
    'red',
    'yellow',
    'white',
    'bright_black',
    'bright_blue',
    'bright_cyan',
    'bright_green',
    'bright_magenta',
    'bright_red',
    'bright_yellow',
    'bright_white',
  ].forEach(colourName => {
    myTest(`- ${colourName}`, palette[terminal[colourName]])
  })

  myTest(
    'Syntax',
    syntax && typeof syntax === 'object' && Object.keys(syntax).length === 9,
  )
  ;[
    'comments',
    'functions',
    'keywords',
    'primitives',
    'punctuation',
    'storage',
    'strings',
    'tags',
    'variables',
  ].forEach(category => {
    myTest(`- ${category}`, syntax[category] && palette[syntax[category]])
  })

  myTest('UI', ui && typeof ui === 'object' && Object.keys(ui).length === 18)
  ;[
    'primary',
    'secondary',
    'warning',
    'error',
    'borders',
    'background',
    'panels',
    'text_subtle',
    'text',
    'text_active',
    'highlight',
    'highlight_active',
    'highlight_border',
    'transparent',
    'white',
    'green',
    'amber',
    'red',
  ].forEach(category => {
    myTest(`- ${category}`, ui[category] && palette[ui[category]])
  })
}

module.exports = testTheme
