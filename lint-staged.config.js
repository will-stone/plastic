export default {
  '*.{css,json,md}': ['bun --bun x prettier --write'],
  // `bun --bun x` not yet working on ESLint
  '*.{js,cjs,mjs,ts.astro}': ['eslint --fix'],
}
