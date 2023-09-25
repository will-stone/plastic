const prettierConfig = require('@will-stone/prettier-config')

module.exports = {
  ...prettierConfig,
  plugins: [...prettierConfig.plugins, 'prettier-plugin-astro'],
}
