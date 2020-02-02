# Plastic

_[A simple syntax and UI theme for Visual Studio Code.](https://will-stone.github.io/plastic/)_

---

## Notable features

- Dark UI elements for all-day coding.
- Small colour palette to avoid visual overload.
- Additional deprioritised-punctuation theme; concentrate on the content.

<a href="https://raw.githubusercontent.com/will-stone/plastic/master/docs/screenshot.png" target="_blank"><img src="https://raw.githubusercontent.com/will-stone/plastic/master/docs/screenshot.png" width="500" alt="Screenshot"></a>

## Colours

Inspired by Atom's One Dark theme, yet simpler and darker.

Colour names provided by [Chirag Mehta's](http://chir.ag/about) fantastic
[Name That Colour](http://chir.ag/projects/name-that-color/) website.

### Syntax

- ![#5f6672](https://placehold.it/15/5c6370/000000?text=+) Shuttle Gray
  **#5f6672** - _Comments_
- ![#d19a66](https://placehold.it/15/d19a66/000000?text=+) Whiskey **#d19a66** -
  _Functions_
- ![#e06c75](https://placehold.it/15/e06c75/000000?text=+) Sunglo **#e06c75** -
  _Keywords_
- ![#56b6c2](https://placehold.it/15/56b6c2/000000?text=+) Fountain Blue
  **#56b6c2** - _Primitives_
- ![#a9b2c3](https://placehold.it/15/abb2bf/000000?text=+) Cadet Blue
  **#a9b2c3** - _Punctuation_
- ![#61afef](https://placehold.it/15/61afef/000000?text=+) Cornflower Blue
  **#61afef** - _Storage_
- ![#98c379](https://placehold.it/15/98c379/000000?text=+) Olivine **#98c379** -
  _Strings_
- ![#e5c07b](https://placehold.it/15/e5c07b/000000?text=+) Harvest Gold
  **#e5c07b** - _Tags_
- ![#d4d7d9](https://placehold.it/15/D2D6db/000000?text=+) Iron **#d4d7d9** -
  _Variables_

## Contribute

Themes can always be improved and tweaked so please feel free to log issues and
send pull requests. However, please keep in mind that this theme strives to
remain simple and language agnostic; for example, please do not ask for
`blah.blah.php` or `blah.blah.c` scopes to be added. Also, and this is purely
personal, I'm a JavaScript developer and therefore anything that alters the
colours for the JavaScript language will receive much more scrutiny before being
merged in.

Clone the repository to `.vscode/extenstions/`(remember to remove any other
installed versions of Plastic), run `yarn` to install dependencies, and
`yarn docs` to serve the documentation page.

Use Microsoft's
[theme color reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference)
for UI theming help.

You'll notice that the syntax is grouped by colour instead of scope. I find this
much nicer to maintain.

Happy hacking :)

## License

MIT

## Development

The themes are created using a generator. There are two main files for this:

### `theme-builder/theme.yaml`

This contains the colour palette and their associated hex values. From here on,
you use the colour names for each variable. There are then groups of variables
for terminal, syntax, and UI.

### `theme-builder/config.yaml`.

If you are only changing colours, you shouldn't need to edit this file. This is
where the theme scopes are associated to the variables in the previous file;
when VSCode updates bring new themeable items, they are added here.

### Build

Install the dependencies using [Yarn](https://yarnpkg.com/lang/en/) v1:

```sh
yarn
```

Then compile the theme files to the `themes` folder using:

```sh
yarn build-vscode
```
