# Plastic

_[A simple syntax and UI theme for Visual Studio Code.](http://wstone.io/plastic/)_

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

* ![#5c6370](https://placehold.it/15/5c6370/000000?text=+) Shuttle Gray
  **#5c6370** - _Comments_
* ![#d19a66](https://placehold.it/15/d19a66/000000?text=+) Whiskey **#d19a66** -
  _Functions_
* ![#e06c75](https://placehold.it/15/e06c75/000000?text=+) Sunglo **#e06c75** -
  _Keywords_
* ![#56b6c2](https://placehold.it/15/56b6c2/000000?text=+) Fountain Blue
  **#56b6c2** - _Primitives_
* ![#abb2bf](https://placehold.it/15/abb2bf/000000?text=+) Cadet Blue
  **#abb2bf** - _Punctuation_
* ![#61afef](https://placehold.it/15/61afef/000000?text=+) Cornflower Blue
  **#61afef** - _Storage_
* ![#98c379](https://placehold.it/15/98c379/000000?text=+) Olivine **#98c379** -
  _Strings_
* ![#e5c07b](https://placehold.it/15/e5c07b/000000?text=+) Harvest Gold
  **#e5c07b** - _Tags_
* ![#D2D6db](https://placehold.it/15/D2D6db/000000?text=+) Iron **#D2D6db** -
  _Variables_

### UI

* ![#e06c75](https://placehold.it/15/e06c75/000000?text=+) Sunglo **#e06c75** -
  _Primary: buttons, activity-bar badge_
* ![#61afef](https://placehold.it/15/61afef/000000?text=+) Cornflower Blue
  **#61afef** - _Secondary: find highlight, bracket match etc._
* ![#e5c07b](https://placehold.it/15/e5c07b/000000?text=+) Harvest Gold
  **#e5c07b** - _Warning: squiggly underlines, find match errors etc._
* ![#E34234](https://placehold.it/15/E34234/000000?text=+) Cinnabar
  **#E34234** - _Error: squiggly underlines, find match errors etc._
* ![#080A0F](https://placehold.it/15/080A0F/000000?text=+) Bunker **#080A0F** -
  _Borders: borders that separate the panels, sidebars, tabs etc._
* ![#21252b](https://placehold.it/15/21252b/000000?text=+) Shark **#21252b** -
  _Background: editor, titlebar, and activity bar background_
* ![#181A1F](https://placehold.it/15/181A1F/000000?text=+) Woodsmoke
  **#181A1F** - _Panels: sidebar, terminal, inactive tabs etc._
* ![#5F6672](https://placehold.it/15/5F6672/000000?text=+) Shuttle Gray
  **#5F6672** - _Text Subtle: line numbers, muted items_
* ![#A9B2C3](https://placehold.it/15/A9B2C3/000000?text=+) Cadet Blue
  **#A9B2C3** - _Text_
* ![#D4D7D9](https://placehold.it/15/D4D7D9/000000?text=+) Iron **#D4D7D9** -
  _Text Active: active tab, active line number, active list text etc._
* ![#A9B2C31A](https://placehold.it/15/A9B2C31A/000000?text=+) Cadet Blue (1A
  opacity) **#A9B2C31A** - _Highlight: ui flourishes: whitespace, indent guide,
  ruler, line highlight_
* ![#A9B2C333](https://placehold.it/15/A9B2C333/000000?text=+) Cadet Blue (33
  opacity) **#A9B2C333** - _Highlight Active: active indent guide, selection,
  search match_
* ![#D4D7D9](https://placehold.it/15/D4D7D9/000000?text=+) Iron **#D4D7D9** -
  _Highlight Border: search match borders_

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
