import { colours } from './colours.js'

const {
  bunker,
  cadetBlue1A,
  cadetBlue33,
  cadetBlue,
  cornflowerBlue,
  dodgerBlue,
  fountainBlue,
  ghost,
  harvestGold,
  lavender,
  olivine,
  robRoy,
  shark,
  shuttleGray,
  sunglo,
  transparent,
  valencia,
  whiskey,
  white,
  woodsmoke,
} = colours

export function getTheme() {
  return {
    name: 'Plastic',
    colors: {
      // Terminal
      'terminal.ansiBlack': shark,
      'terminal.ansiBlue': cornflowerBlue,
      'terminal.ansiCyan': fountainBlue,
      'terminal.ansiGreen': olivine,
      'terminal.ansiMagenta': lavender,
      'terminal.ansiRed': sunglo,
      'terminal.ansiYellow': robRoy,
      'terminal.ansiWhite': cadetBlue,
      'terminal.ansiBrightBlack': shuttleGray,
      'terminal.ansiBrightBlue': cornflowerBlue,
      'terminal.ansiBrightCyan': fountainBlue,
      'terminal.ansiBrightGreen': olivine,
      'terminal.ansiBrightMagenta': lavender,
      'terminal.ansiBrightRed': sunglo,
      'terminal.ansiBrightYellow': robRoy,
      'terminal.ansiBrightWhite': cadetBlue,

      // green
      'editorGutter.addedBackground': olivine,
      'editorOverviewRuler.addedForeground': olivine,
      'gitDecoration.untrackedResourceForeground': olivine,
      'minimapGutter.addedBackground': olivine,

      // amber
      'editorGutter.modifiedBackground': whiskey,
      'editorOverviewRuler.modifiedForeground': whiskey,
      'gitDecoration.modifiedResourceForeground': whiskey,
      'minimapGutter.modifiedBackground': whiskey,

      // red. buttons, activity-bar badge
      'activityBarBadge.background': sunglo,
      'button.background': sunglo,
      'editorGutter.deletedBackground': sunglo,
      'editorOverviewRuler.deletedForeground': sunglo,
      'gitDecoration.deletedResourceForeground': sunglo,
      'minimapGutter.deletedBackground': sunglo,

      // find highlight, bracket match etc.
      'activityBar.activeBorder': dodgerBlue,
      'editor.findMatchBorder': dodgerBlue,
      'editor.wordHighlightBorder': dodgerBlue,
      'editor.wordHighlightStrongBorder': dodgerBlue,
      'editorBracketMatch.border': dodgerBlue,
      'editorHoverWidget.border': dodgerBlue,
      'editorInfo.foreground': dodgerBlue,
      'editorLightBulbAutoFix.foreground': dodgerBlue,
      'editorOverviewRuler.infoForeground': dodgerBlue,
      'editorOverviewRuler.findMatchForeground': dodgerBlue,
      'editorSuggestWidget.border': dodgerBlue,
      focusBorder: dodgerBlue,
      'inputOption.activeBorder': dodgerBlue,
      'inputValidation.infoBackground': dodgerBlue,
      'inputValidation.infoBorder': dodgerBlue,
      'minimap.findMatchHighlight': dodgerBlue,
      'peekView.border': dodgerBlue,
      'tab.activeBorderTop': dodgerBlue,

      // warning. squiggly underlines, find match errors etc.
      'editorLightBulb.foreground': robRoy,
      'editorOverviewRuler.warningForeground': robRoy,
      'editorWarning.foreground': robRoy,
      'inputValidation.warningBackground': robRoy,
      'inputValidation.warningBorder': robRoy,
      'list.warningForeground': robRoy,

      // error. squiggly underlines, find match errors etc.
      'editorError.foreground': valencia,
      'editorOverviewRuler.errorForeground': valencia,
      errorForeground: valencia,
      'inputValidation.errorBackground': valencia,
      'inputValidation.errorBorder': valencia,
      'list.errorForeground': valencia,

      // borders that separate the panels, sidebars, tabs etc.
      'activityBar.border': bunker,
      contrastBorder: bunker,
      'dropdown.border': bunker,
      'editorGroup.border': bunker,
      'editorIndentGuide.background': bunker,
      'editorOverviewRuler.border': bunker,
      'editorRuler.foreground': bunker,
      'input.background': bunker,
      'inputValidation.infoForeground': bunker,
      'inputValidation.warningForeground': bunker,
      'notificationCenter.border': bunker,
      'notifications.border': bunker,
      'notificationToast.border': bunker,
      'panel.border': bunker,
      'sideBar.border': bunker,
      'statusBar.border': bunker,
      'tab.border': bunker,
      'titleBar.border': bunker,

      // editor, titlebar, and activity bar background
      'activityBar.background': shark,
      'editor.background': shark,
      'sideBarSectionHeader.background': shark,
      'statusBar.background': shark,
      'tab.activeBackground': shark,
      'titleBar.activeBackground': shark,
      'titleBar.inactiveBackground': shark,

      // sidebar, terminal, inactive tabs etc.
      'activityBar.dropBackground': woodsmoke,
      'debugToolBar.background': woodsmoke,
      'dropdown.background': woodsmoke,
      'editorGroup.emptyBackground': woodsmoke,
      'editorGroupHeader.tabsBackground': woodsmoke,
      'editorHoverWidget.background': woodsmoke,
      'editorSuggestWidget.background': woodsmoke,
      'editorWidget.background': woodsmoke,
      'notificationCenterHeader.background': woodsmoke,
      'notifications.background': woodsmoke,
      'panel.background': woodsmoke,
      'peekViewEditor.background': woodsmoke,
      'peekViewResult.background': woodsmoke,
      'peekViewTitle.background': woodsmoke,
      'sideBar.background': woodsmoke,
      'statusBar.debuggingBackground': woodsmoke,
      'statusBar.noFolderBackground': woodsmoke,
      'statusBarItem.hoverBackground': woodsmoke,
      'tab.inactiveBackground': woodsmoke,

      // line numbers, muted items
      'activityBar.inactiveForeground': shuttleGray,
      'breadcrumb.foreground': shuttleGray,
      'editorLineNumber.foreground': shuttleGray,
      'gitDecoration.ignoredResourceForeground': shuttleGray,
      'panelTitle.inactiveForeground': shuttleGray,
      'tab.inactiveForeground': shuttleGray,
      'titleBar.inactiveForeground': shuttleGray,

      // text
      'editor.foreground': cadetBlue,
      'editorCursor.foreground': cadetBlue,
      'statusBar.foreground': cadetBlue,
      'terminal.foreground': cadetBlue,

      // active tab, active line number, active list text etc. Search match borders
      'activityBar.foreground': ghost,
      'breadcrumb.focusForeground': ghost,
      'editor.findMatchHighlightBorder': ghost,
      'editor.rangeHighlightBorder': ghost,
      'editor.selectionHighlightBorder': ghost,
      'editorLineNumber.activeForeground': ghost,
      'list.inactiveSelectionForeground': ghost,
      'minimap.selectionHighlight': ghost,
      'peekViewResult.selectionForeground': ghost,
      'sideBar.foreground': ghost,
      'tab.activeForeground': ghost,
      'titleBar.activeForeground': ghost,

      // ui flourishes: whitespace, indent guide, ruler, line highlight
      'editor.lineHighlightBackground': cadetBlue1A,
      'editor.selectionHighlightBackground': cadetBlue1A,
      'editorSuggestWidget.selectedBackground': cadetBlue1A,
      'editorWhitespace.foreground': cadetBlue1A,
      'list.hoverBackground': cadetBlue1A,
      'peekViewResult.selectionBackground': cadetBlue1A,
      'scrollbarSlider.background': cadetBlue1A,

      // active indent guide, selection, search match
      'editor.selectionBackground': cadetBlue33,
      'editorIndentGuide.activeBackground': cadetBlue33,
      'list.activeSelectionBackground': cadetBlue33,
      'list.focusBackground': cadetBlue33,
      'list.inactiveSelectionBackground': cadetBlue33,
      'peekViewEditor.matchHighlightBackground': cadetBlue33,
      'peekViewResult.matchHighlightBackground': cadetBlue33,
      'scrollbarSlider.activeBackground': cadetBlue33,
      'scrollbarSlider.hoverBackground': cadetBlue33,
      'sash.hoverBorder': cadetBlue33,

      // a few tweaks to some backgrounds and highlights
      'editor.findMatchBackground': transparent,
      'editor.findMatchHighlightBackground': transparent,
      'editor.lineHighlightBorder': transparent,
      'editor.wordHighlightBackground': transparent,
      'editor.wordHighlightStrongBackground': transparent,
      'editorBracketMatch.background': transparent,
      'scrollbar.shadow': transparent,
      'widget.shadow': transparent,

      // some active items and text, that just looks better as pure white
      'activityBarBadge.foreground': white,
      'list.activeSelectionForeground': white,
    },
    tokenColors: [
      // Syntax
      ...[
        // comments
        [
          [
            'comment',
            // start and end of comment blocks
            'punctuation.definition.comment',
          ],
          shuttleGray,
        ],

        // functions
        [['entity.name.function', 'support.function'], lavender],

        // import, export, return etc.
        [
          [
            'keyword',
            // css @ in @media queries
            'punctuation.definition.keyword',
            // this
            'variable.language',
          ],
          sunglo,
        ],

        // primitives
        [['constant', 'support.constant'], fountainBlue],

        // const, var, class etc. and React JSX component tag
        [
          [
            'storage',
            // console and JSX custom components
            'support.class',
          ],
          cornflowerBlue,
        ],

        // anything in quotes
        [
          [
            // inline code in markdown
            'markup.inline.raw.string',
            'string',
          ],
          olivine,
        ],

        // html tags and types
        [
          [
            'entity.name.section',
            'entity.name.tag',
            'entity.name.type',
            'support.type',
          ],
          harvestGold,
        ],

        // variables
        [
          [
            // css property names
            'support.type.property-name',
            'support.variable',
            'variable',
          ],
          ghost,
        ],

        // Other
        [
          [
            'entity.other',
            // css . and # for CSS classes and IDs
            'punctuation.definition.entity',
            'support.other',
          ],
          whiskey,
        ],

        // Normal syntax
        [['meta.brace', 'punctuation'], cadetBlue],
      ].map(([scope, foreground]) => ({
        scope,
        settings: { foreground },
      })),

      // Font styles
      ...[
        // bold
        [
          [
            'markup.bold',
            'punctuation.definition.bold',
            // css ID
            'entity.other.attribute-name.id',
          ],
          'bold',
        ],

        // italic
        [
          ['comment', 'markup.italic', 'punctuation.definition.italic'],
          'italic',
        ],
      ].map(([scope, style]) => ({
        name: style,
        scope,
        settings: { fontStyle: style },
      })),
    ],
    semanticTokenColors: {},
    semanticHighlighting: true,
  }
}
