export default {
  '*.{css,json,md}': ['prettier --write'],
  '*.{js,cjs,mjs,ts.astro}': ['eslint --fix'],
}
