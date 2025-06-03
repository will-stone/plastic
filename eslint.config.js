import config from '@will-stone/eslint-config'

export default [
  ...(await config()),
  {
    ignores: ['samples'],
  },
]
