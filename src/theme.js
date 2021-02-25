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

export function getTheme(deprioritised = false) {
  return {
    name: 'Plastic',
    colors: {
      'activityBar.activeBorder': dodgerBlue,
      'activityBar.background': shark,
      'activityBar.border': bunker,
      'activityBar.dropBackground': woodsmoke,
      'activityBar.foreground': ghost,
      'activityBar.inactiveForeground': shuttleGray,

      'activityBarBadge.background': sunglo,
      'activityBarBadge.foreground': white,

      'breadcrumb.focusForeground': ghost,
      'breadcrumb.foreground': shuttleGray,

      'button.background': sunglo,

      contrastBorder: bunker,

      'debugToolBar.background': woodsmoke,

      'dropdown.background': woodsmoke,
      'dropdown.border': bunker,

      'editor.background': shark,
      'editor.findMatchBackground': transparent,
      'editor.findMatchBorder': dodgerBlue,
      'editor.findMatchHighlightBackground': transparent,
      'editor.findMatchHighlightBorder': ghost,
      'editor.foreground': cadetBlue,
      'editor.lineHighlightBackground': cadetBlue1A,
      'editor.lineHighlightBorder': transparent,
      'editor.rangeHighlightBorder': ghost,
      'editor.selectionBackground': cadetBlue33,
      'editor.selectionHighlightBackground': cadetBlue1A,
      'editor.selectionHighlightBorder': ghost,
      'editor.wordHighlightBackground': transparent,
      'editor.wordHighlightBorder': dodgerBlue,
      'editor.wordHighlightStrongBackground': transparent,
      'editor.wordHighlightStrongBorder': dodgerBlue,

      'editorBracketMatch.background': transparent,
      'editorBracketMatch.border': dodgerBlue,

      'editorCursor.foreground': cadetBlue,

      'editorError.foreground': valencia,

      'editorGroup.border': bunker,
      'editorGroup.emptyBackground': woodsmoke,

      'editorGroupHeader.tabsBackground': woodsmoke,

      'editorGutter.addedBackground': olivine,
      'editorGutter.deletedBackground': sunglo,
      'editorGutter.modifiedBackground': whiskey,

      'editorHoverWidget.background': woodsmoke,
      'editorHoverWidget.border': dodgerBlue,

      'editorIndentGuide.activeBackground': cadetBlue33,
      'editorIndentGuide.background': bunker,

      'editorInfo.foreground': dodgerBlue,

      'editorLightBulb.foreground': robRoy,

      'editorLightBulbAutoFix.foreground': dodgerBlue,

      'editorLineNumber.activeForeground': ghost,
      'editorLineNumber.foreground': shuttleGray,

      'editorOverviewRuler.addedForeground': olivine,
      'editorOverviewRuler.border': bunker,
      'editorOverviewRuler.deletedForeground': sunglo,
      'editorOverviewRuler.errorForeground': valencia,
      'editorOverviewRuler.findMatchForeground': dodgerBlue,
      'editorOverviewRuler.infoForeground': dodgerBlue,
      'editorOverviewRuler.modifiedForeground': whiskey,
      'editorOverviewRuler.warningForeground': robRoy,

      'editorRuler.foreground': bunker,

      'editorSuggestWidget.background': woodsmoke,
      'editorSuggestWidget.border': dodgerBlue,
      'editorSuggestWidget.selectedBackground': cadetBlue1A,

      'editorWarning.foreground': robRoy,

      'editorWhitespace.foreground': cadetBlue1A,

      'editorWidget.background': woodsmoke,

      errorForeground: valencia,

      focusBorder: dodgerBlue,

      'gitDecoration.deletedResourceForeground': sunglo,
      'gitDecoration.ignoredResourceForeground': shuttleGray,
      'gitDecoration.modifiedResourceForeground': whiskey,
      'gitDecoration.untrackedResourceForeground': olivine,

      'input.background': bunker,

      'inputOption.activeBorder': dodgerBlue,

      'inputValidation.errorBackground': valencia,
      'inputValidation.errorBorder': valencia,
      'inputValidation.infoBackground': dodgerBlue,
      'inputValidation.infoBorder': dodgerBlue,
      'inputValidation.infoForeground': bunker,
      'inputValidation.warningBackground': robRoy,
      'inputValidation.warningBorder': robRoy,
      'inputValidation.warningForeground': bunker,

      'list.activeSelectionBackground': cadetBlue33,
      'list.activeSelectionForeground': white,
      'list.errorForeground': valencia,
      'list.focusBackground': cadetBlue33,
      'list.hoverBackground': cadetBlue1A,
      'list.inactiveSelectionBackground': cadetBlue33,
      'list.inactiveSelectionForeground': ghost,
      'list.warningForeground': robRoy,

      'minimap.findMatchHighlight': dodgerBlue,
      'minimap.selectionHighlight': ghost,

      'minimapGutter.addedBackground': olivine,
      'minimapGutter.deletedBackground': sunglo,
      'minimapGutter.modifiedBackground': whiskey,

      'notificationCenter.border': bunker,

      'notificationCenterHeader.background': woodsmoke,

      'notifications.background': woodsmoke,
      'notifications.border': bunker,

      'notificationToast.border': bunker,

      'panel.background': woodsmoke,
      'panel.border': bunker,

      'panelTitle.inactiveForeground': shuttleGray,

      'peekView.border': dodgerBlue,

      'peekViewEditor.background': woodsmoke,
      'peekViewEditor.matchHighlightBackground': cadetBlue33,

      'peekViewResult.background': woodsmoke,
      'peekViewResult.matchHighlightBackground': cadetBlue33,
      'peekViewResult.selectionBackground': cadetBlue1A,
      'peekViewResult.selectionForeground': ghost,

      'peekViewTitle.background': woodsmoke,

      'sash.hoverBorder': cadetBlue33,

      'scrollbar.shadow': transparent,

      'scrollbarSlider.activeBackground': cadetBlue33,
      'scrollbarSlider.background': cadetBlue1A,
      'scrollbarSlider.hoverBackground': cadetBlue33,

      'sideBar.background': woodsmoke,
      'sideBar.border': bunker,
      'sideBar.foreground': ghost,

      'sideBarSectionHeader.background': shark,

      'statusBar.background': shark,
      'statusBar.border': bunker,
      'statusBar.debuggingBackground': harvestGold,
      'statusBar.debuggingForeground': bunker,
      'statusBar.foreground': cadetBlue,
      'statusBar.noFolderBackground': woodsmoke,

      'statusBarItem.hoverBackground': woodsmoke,

      'tab.activeBackground': shark,
      'tab.activeBorderTop': dodgerBlue,
      'tab.activeForeground': ghost,
      'tab.border': bunker,
      'tab.inactiveBackground': woodsmoke,
      'tab.inactiveForeground': shuttleGray,

      'terminal.ansiBlack': shark,
      'terminal.ansiBlue': cornflowerBlue,
      'terminal.ansiBrightBlack': shuttleGray,
      'terminal.ansiBrightBlue': cornflowerBlue,
      'terminal.ansiBrightCyan': fountainBlue,
      'terminal.ansiBrightGreen': olivine,
      'terminal.ansiBrightMagenta': lavender,
      'terminal.ansiBrightRed': sunglo,
      'terminal.ansiBrightWhite': cadetBlue,
      'terminal.ansiBrightYellow': robRoy,
      'terminal.ansiCyan': fountainBlue,
      'terminal.ansiGreen': olivine,
      'terminal.ansiMagenta': lavender,
      'terminal.ansiRed': sunglo,
      'terminal.ansiWhite': cadetBlue,
      'terminal.ansiYellow': robRoy,
      'terminal.foreground': cadetBlue,

      'titleBar.activeBackground': shark,
      'titleBar.activeForeground': ghost,
      'titleBar.border': bunker,
      'titleBar.inactiveBackground': shark,
      'titleBar.inactiveForeground': shuttleGray,

      'widget.shadow': transparent,
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

        [
          ['meta.brace', 'punctuation'],
          deprioritised ? shuttleGray : cadetBlue,
        ],
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
