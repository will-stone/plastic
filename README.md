# Plastic

_[A simple syntax and UI theme for Visual Studio Code.](https://plastictheme.com/)_

---

v3 introduced a new syntax colour: lavender for functions. This helps tone-down
the amount of whiskey colour, which is now mainly used for JSX props. The scopes
have also been simplified further, separating them into clear types. However,
worry not if you preferred v2, this can still be found in the theme-picker under
"Plastic Legacy v2".

Please note that v2 is no longer maintained.

---

## Notable features

- Dark UI elements for all-day coding.
- Small colour palette to avoid visual overload.
- Additional deprioritised-punctuation theme; concentrate on the content.

<a href="https://raw.githubusercontent.com/PlasticTheme/Visual-Studio-Code/master/screenshot.png" target="_blank"><img src="https://raw.githubusercontent.com/PlasticTheme/Visual-Studio-Code/master/screenshot.png" width="500" alt="Screenshot"></a>

## License

MIT

## Development

The themes are created using a generator: `src/index.js`. The configuration can
be found in the `src/theme.js` files.

### Build

Install the dependencies using [npm v7+](https://docs.npmjs.com/cli/v7):

```sh
npm i
```

Then compile the theme files to the `themes` folder using:

```sh
npm run build
```
