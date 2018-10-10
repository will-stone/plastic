# Change Log

All notable changes to the _Plastic_ theme will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this
project adheres to [Semantic Versioning](http://semver.org/).

## [2.2.0] - 2018-10-09

* Feat: Darker inactive activity bar icons. Closes #29.
* Fix: low contrast text on git warning. Closes #25.

## [2.1.0] - 2018-06-10

Updates to the upcoming builder/compiler mean slight tweaks to the theme.

* JS terminator (semi-colons) are same as all other punctuation (use the
  deprioritised theme if you need these to be more subtle). This may change back
  in the future, depending on public opinion.
* Inactive tab text is darker.
* List active highlight swapped with list hover: active is now the lighter
  colour.

The repo is now a monorepo and I'll be adding in more documentation soon on how
to build your own Plastic theme.

## [2.0.2] - 2018-06-03

* Looks like the move worked. Forgot the README though, this update adds it
  back.

## [2.0.1] - 2018-06-03

* This is a test to see if I can move the Plastic theme into a sub-directory. If
  it breaks the theme, I'll roll it back.

## [2.0.0] - 2018-05-30

* New v2 config system allows you to make your own variation of Plastic. More
  info soon.
* Even less specific scopes means Plastic really is a _simple theme_.
* Various workbench tweaks to standardise some colours.

v2 has been in the making for quite some time. Please report any issues on
GitHub.

## [1.11.2] - 2018-05-29

* v2's compiler ready.
* Deprioritised v2 theme.

## [1.11.1] - 2018-05-22

v2 beta: use v1 syntax colours (mainly).

## [1.11.0] - 2018-05-21

* I have been testing a new version for some time and am nearly ready to release
  Plastic v2!
  * Most colours have been tweaked to match their name on
    [Chirag's website](http://chir.ag/projects/name-that-color/). e.g. Whiskey
    is now a solid whiskey colour instead of an approximation. This gives a more
    vibrant feel and better contrast.
  * Added an easier method to configure the theme. Now there's three config
    files: the colour names, syntax, and workbench configurations. A build
    script runs through these and outputs the resulting theme file in the themes
    folder. Clone the repo and try it yourself using `yarn build`.
  * The scope (syntax) have been simplified further, using (even more!) generic
    rules. I've tried to keep the scopes to two levels of specification, with a
    maximum of three if necessary.

Note: v2 will soon become the next version of Plastic so please provide
feedback. v1 will no longer be maintained and will eventually be removed. This
is due to the new way that the theme is built and configured (see above). This
theme will also no longer provide a deprioritised-punctuation version. However,
after v2 has been finalised, I will start a _Plastic Forks_ program, and will
add in a Plastic-Deprioritised-Punctuation theme as its first entry. If you rely
on this variation, I suggest sticking with the legacy version for now (I won't
remove it until the new one is released).

## [1.10.0] - 2018-04-09

* Improve INI (properties) syntax highlighting (thanks to @pkazmier).

## [1.9.2] - 2018-03-10

* Brighter terminal bright-colours.

## [1.9.1] - 2018-03-10

* Style default terminal foreground text.

## [1.9.0] - 2018-03-09

* Styled terminal

## [1.8.0] - 2018-03-09

* Styled word highlight background.
* Styled word highlight strong background.
* Styled word highlight strong border.

## [1.7.0] - 2018-03-08

* Styled debug toolbar background.
* Styled Notification Centre and notifications background.
* Styled active line number foreground.
* Styled word highlight border.

## [1.6.0] - 2018-03-06

* Improve Python regexp and docstring highlighting (thanks to @pkazmier).

## [1.5.0] - 2018-02-04

* Enhanced Go and Python support (thanks to @pkazmier).

## [1.4.0] - 2018-01-27

* Themed peek view (thanks to @pkazmier).
* More punctuation themed in the deprioritised theme (thanks to @pkazmier).

## [1.3.0] - 2017-10-16

* Yellow warning squiggles.
* Darker terminal background, to match sidebar.
* Themed scrollbar.

## [1.2.0] - 2017-07-15

* Suggestion and hover widgets now stand out more with a blue border and darker
  background.
* Various other minor tweaks to improve contrast.
* Fixed: SVG icon no longer allowed; changed to PNG.

## [1.1.4] - 2017-06-19

* Slightly darkened line numbers, ruler, and whitespace characters. Previous
  color (same as comments) was too bright and over powering when many
  indents/white-space characters were present.

## [1.1.3] - 2017-06-19

* Line numbers, ruler, and whitespace characters are now the same colour as
  comments.

## [1.1.2] - 2017-05-19

* docs updated with colours and more contribution details. screenshot updated to
  match 1.1.x

## [1.1.1] - 2017-05-18

* punctuation header (for markdown files) changed from default colour to Sunglo.

## [1.1.0] - 2017-05-17

* Punctuation returned to normal colour (Cadet Blue) and additional
  deprioritised-punctuation theme added.

## [1.0.9] - 2017-05-16

* darker contrast border.

## [1.0.8] - 2017-05-16

* added contrast border.

## [1.0.7] - 2017-05-14

* Add homepage link to readme.

## [1.0.6] - 2017-05-14

* fix: readme image links.

## [1.0.5] - 2017-05-14

* remove duplicate function scope.

## [1.0.4] - 2017-05-14

* standardise input and dropdown.

## [1.0.3] - 2017-05-14

* fix for dom functions (blue to orange).

## [1.0.2] - 2017-05-14

* Remove need for CSS specific scope.

## [1.0.1] - 2017-05-13

* keyword.other.unit = Fountain Blue.
* button.background = Sunglo.
* punctuation.definition.keyword = Sunglo.
* punctuation.definition.entity.css = Whiskey.
* Remove diff editor custom highlight colour.

## [1.0.0] - 2017-05-13

* Initial release.
