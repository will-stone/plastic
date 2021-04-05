# Monorepo for the Plastic Theme apps

Use `npm>=7` to install dependencies:

```sh
npm i
```

Lint all workspaces:

```sh
npm run lint
```

## Palette

Test types:

```sh
npm run test --workspace=palette
```

## Themes

### Visual Studio Code

Build:

```sh
npm run build --workspace=plastic
```

Release:

```sh
npm run release --workspace=plastic
```

## Website

Develop:

```
npm run dev --workspace=website
```
