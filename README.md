# Plastic

_[A simple syntax and UI theme for Visual Studio Code.](http://wstone.io/plastic/)_

---

## Notable features

* Dark UI elements for all-day coding.
* Small colour palette to avoid visual overload.
* Additional deprioritised-punctuation theme; concentrate on the content.

<img src="https://raw.githubusercontent.com/will-stone/plastic/master/docs/screenshot-min.png" width="500" alt="Screenshot">

## Syntax Colours

Inspired by Atom's One Dark theme, yet simpler and darker.

* ![#abb2bf](https://placehold.it/15/abb2bf/000000?text=+) Cadet Blue **#abb2bf** - _text_
* ![#D2D6db](https://placehold.it/15/D2D6db/000000?text=+) Iron **#D2D6db** - _variables_
* ![#61afef](https://placehold.it/15/61afef/000000?text=+) Cornflower Blue **#61afef** - _storage_
* ![#56b6c2](https://placehold.it/15/56b6c2/000000?text=+) Fountain Blue **#56b6c2** - _constant_
* ![#5c6370](https://placehold.it/15/5c6370/000000?text=+) Shuttle Gray **#5c6370** - _comments_
* ![#737c8c](https://placehold.it/15/737c8c/000000?text=+) Raven **#737c8c** - _punctuation_
* ![#98c379](https://placehold.it/15/98c379/000000?text=+) Olivine **#98c379** - _strings_
* ![#d19a66](https://placehold.it/15/d19a66/000000?text=+) Whiskey **#d19a66** - _functions_
* ![#e5c07b](https://placehold.it/15/e5c07b/000000?text=+) Harvest Gold **#e5c07b** - _tags_
* ![#e06c75](https://placehold.it/15/e06c75/000000?text=+) Sunglo **#e06c75** - _keywords_

<small>Colour names provided by [Chirag Mehta's](http://chir.ag/about) fantastic [Name That Colour](http://chir.ag/projects/name-that-color/) website.</small>

## Contribute

Themes can always be improved and tweaked so please feel free to log issues and send pull requests. However, please keep in mind that this theme strives to remain simple and language agnostic; for example, please do not ask for `blah.blah.php` or `blah.blah.c` scopes to be added. Also, and this is purely personal, I'm a JavaScript developer and therefore anything that alters the colours for the JavaScript language will receive much more scrutiny before being merged in.

Clone the repository to `.vscode/extenstions/`(remember to remove any other installed versions of Plastic), run `yarn` to install dependencies, and `yarn docs` to serve the documentation page.

Use Microsoft's [theme color reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) for UI theming help.

You'll notice that the syntax is grouped by colour instead of scope. I find this much nicer to maintain.

Happy hacking :)

# License

MIT
