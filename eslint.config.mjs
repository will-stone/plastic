import config from '@will-stone/eslint-config'

export default [
  {
    ignores: ['themes/vscode/samples'],
  },
  {
    settings: {
      tailwindcss: {
        config: 'website/tailwind.config.js',
      },
    },
  },
  ...config,
  {
    rules: {
      'jsx-a11y/anchor-is-valid': 'off',
    },
  },
]
