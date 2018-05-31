# Plastic

_[A simple syntax and UI theme for Visual Studio Code.](http://wstone.io/plastic/)_

> NOTE: Plastic is now an NPM package too and this README is yet to be update
> with instructions for using that tool.

---

## Notable features

* Dark UI elements for all-day coding.
* Small colour palette to avoid visual overload.
* Additional deprioritised-punctuation theme; concentrate on the content.

<a href="https://raw.githubusercontent.com/will-stone/plastic/master/docs/screenshot-min.png" target="_blank"><img src="https://raw.githubusercontent.com/will-stone/plastic/master/docs/screenshot-min.png" width="500" alt="Screenshot"></a>

## Colours

Inspired by Atom's One Dark theme, yet simpler and darker.

Colour names provided by [Chirag Mehta's](http://chir.ag/about) fantastic
[Name That Colour](http://chir.ag/projects/name-that-color/) website.

### Syntax

* ![#abb2bf](https://placehold.it/15/abb2bf/000000?text=+) Cadet Blue
  **#abb2bf** - _text_
* ![#D2D6db](https://placehold.it/15/D2D6db/000000?text=+) Iron **#D2D6db** -
  _variables_
* ![#61afef](https://placehold.it/15/61afef/000000?text=+) Cornflower Blue
  **#61afef** - _storage_
* ![#56b6c2](https://placehold.it/15/56b6c2/000000?text=+) Fountain Blue
  **#56b6c2** - _constant_
* ![#5c6370](https://placehold.it/15/5c6370/000000?text=+) Shuttle Gray
  **#5c6370** - _comments_
* ![#737c8c](https://placehold.it/15/737c8c/000000?text=+) Raven **#737c8c** -
  _punctuation_
* ![#98c379](https://placehold.it/15/98c379/000000?text=+) Olivine **#98c379** -
  _strings_
* ![#d19a66](https://placehold.it/15/d19a66/000000?text=+) Whiskey **#d19a66** -
  _functions_
* ![#e5c07b](https://placehold.it/15/e5c07b/000000?text=+) Harvest Gold
  **#e5c07b** - _tags_
* ![#e06c75](https://placehold.it/15/e06c75/000000?text=+) Sunglo **#e06c75** -
  _keywords_

### UI

* ![#1B659D](https://placehold.it/15/1B659D/000000?text=+) Matisse **#1B659D** -
  _Info_
* ![#A86515](https://placehold.it/15/d4ac0d/000000?text=+) Galliano
  **#d4ac0d** - _Warnings_
* ![#C62D42](https://placehold.it/15/C62D42/000000?text=+) Brick Red
  **#C62D42** - _Errors_
* ![#3E4451](https://placehold.it/15/3E4451/000000?text=+) Bright Gray
  **#3E4451** - _Line numbers, invisibles, ruler_
* ![#21252b](https://placehold.it/15/21252b/000000?text=+) Shark **#21252b** -
  _Fore-background (activity bar, status bar, editor)_
* ![#181A1F](https://placehold.it/15/181A1F/000000?text=+) Woodsmoke
  **#181A1F** - _Back-background (side bar)_
* ![#080A0F](https://placehold.it/15/080A0F/000000?text=+) Bunker **#080A0F** -
  _Back-back-background (input background, contrast borders)_

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

# License

MIT

# V2 Beta

Version 2 of Plastic is now available, go to `View > Command Palette...` and
type "color theme"
