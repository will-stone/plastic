const fs = require('fs')
// var tinycolor = require('tinycolor2')

const normal = {
  black: '#21252b', // Shark
  blue: '#61afef', // Cornflower Blue
  cyan: '#56b6c2', // Fountain Blue
  green: '#98c379', // Olivine
  magenta: '#c678dd', // Lavender
  red: '#e06c75', // Sunglo
  white: '#abb2bf', // Cadet Blue
  yellow: '#e5c07b', // Harvest Gold
}

const bright = {
  black: '#3e4451', // Bright Gray
  blue: '#008cff', // Azure Radiance
  cyan: '#00e1ff', // Cyan / Aqua
  green: '#6aff00', // Bright Green
  magenta: '#c300ff', // Electric Violet
  red: '#ff0015', // Red
  white: '#d2d6db', // Iron
  yellow: '#ffa600', // Web Orange
}

const other = {
  whiskey: '#d19a66',
  shuttleGray: '#5c6370',
  woodsmoke: '#181a1f',
  bunker: '#080a0f',
}

const scopes = {
  storage: normal.blue,
  primitive: normal.cyan,
  string: normal.green,
  function: other.whiskey,
  tag: normal.yellow,
  keyword: normal.red,
  variable: bright.white,
  text: normal.white,
  comment: other.shuttleGray,
  punctuation: normal.white,
}

const ui = {
  foreForeground: '#ffffff',
  foreground: bright.black,
  foreBackground: normal.black,
  background: other.woodsmoke,
  backBackground: other.bunker,
  error: bright.red,
  warning: bright.yellow,
  info: bright.blue,
  primary: normal.red,
}

const template = {
  name: 'Plastic',
  colors: {
    'activityBar.background': ui.foreBackground,
    'activityBar.dropBackground': ui.background,
    'activityBar.foreground': ui.foreForeground,
    'activityBarBadge.background': ui.primary,
    'activityBarBadge.foreground': ui.foreForeground,
    'button.background': ui.primary,
    contrastBorder: ui.backBackground,
    'debugToolBar.background': ui.background,
    'dropdown.background': ui.background,
    'dropdown.border': ui.backBackground,
    'editor.background': ui.foreBackground,
    'editor.findMatchBackground': '#42557B',
    'editor.findMatchHighlightBackground': '#314365',
    'editor.foreground': normal.white,
    'editor.lineHighlightBackground': ui.foreground + '55',
    'editor.selectionBackground': ui.foreground,
    'editor.wordHighlightBackground': '#00000000',
    'editor.wordHighlightBorder': scopes.storage,
    'editor.wordHighlightStrongBackground': '#00000000',
    'editor.wordHighlightStrongBorder': bright.white,
    'editorActiveLineNumber.foreground': normal.white,
    'editorBracketMatch.border': scopes.storage,
    'editorCursor.foreground': normal.white,
    'editorError.foreground': ui.error,
    'editorGroup.background': ui.background,
    'editorGroup.border': ui.backBackground,
    'editorGroupHeader.tabsBackground': ui.background,
    'editorHoverWidget.background': ui.background,
    'editorHoverWidget.border': scopes.storage,
    'editorIndentGuide.background': ui.foreground,
    'editorInfo.foreground': ui.info,
    'editorLineNumber.foreground': ui.foreground,
    'editorOverviewRuler.border': ui.backBackground,
    'editorOverviewRuler.errorForeground': ui.error,
    'editorOverviewRuler.infoForeground': ui.info,
    'editorOverviewRuler.warningForeground': ui.warning,
    'editorRuler.foreground': ui.foreground,
    'editorSuggestWidget.background': ui.background,
    'editorSuggestWidget.border': scopes.storage,
    'editorSuggestWidget.selectedBackground': ui.background,
    'editorWarning.foreground': ui.warning,
    'editorWhitespace.foreground': ui.foreground,
    'editorWidget.background': ui.background,
    focusBorder: scopes.storage,
    'input.background': ui.backBackground,
    'inputOption.activeBorder': scopes.storage,
    'inputValidation.errorBackground': ui.error,
    'inputValidation.errorBorder': ui.error,
    'inputValidation.infoBackground': ui.info,
    'inputValidation.infoBorder': ui.info,
    'inputValidation.warningBackground': ui.warning,
    'inputValidation.warningBorder': ui.warning,
    'list.activeSelectionBackground': ui.foreBackground,
    'list.activeSelectionForeground': bright.white,
    'list.focusBackground': '#2c313a',
    'list.hoverBackground': '#292d35',
    'list.inactiveSelectionBackground': ui.foreBackground,
    'notificationCenterHeader.background': ui.background,
    'notifications.background': ui.background,
    'panel.background': ui.background,
    'panel.border': ui.backBackground,
    'peekView.border': scopes.storage,
    'peekViewEditor.background': ui.background,
    'peekViewEditor.matchHighlightBackground': ui.foreground,
    'peekViewResult.background': ui.background,
    'peekViewResult.matchHighlightBackground': ui.foreground,
    'peekViewResult.selectionBackground': ui.background,
    'peekViewResult.selectionForeground': normal.white,
    'peekViewTitle.background': ui.background,
    'scrollbarSlider.activeBackground': bright.white + '77',
    'scrollbarSlider.background': ui.foreground + '99',
    'scrollbarSlider.hoverBackground': ui.foreground + 'aa',
    'sideBar.background': ui.background,
    'sideBarSectionHeader.background': ui.foreBackground,
    'statusBar.background': ui.foreBackground,
    'statusBar.debuggingBackground': ui.background,
    'statusBar.foreground': '#9da5b4',
    'statusBar.noFolderBackground': ui.background,
    'statusBarItem.hoverBackground': ui.background,
    'tab.activeBackground': ui.background,
    'tab.activeForeground': normal.white,
    'tab.border': ui.backBackground,
    'tab.inactiveBackground': ui.background,
    'tab.inactiveForeground': bright.black,
    'terminal.ansiBlack': ui.background,
    'terminal.ansiBlue': scopes.storage,
    'terminal.ansiBrightBlack': bright.black,
    'terminal.ansiBrightBlue': '#008cff',
    'terminal.ansiBrightCyan': '#00e1ff',
    'terminal.ansiBrightGreen': '#6aff00',
    'terminal.ansiBrightMagenta': '#c300ff',
    'terminal.ansiBrightRed': '#ff0015',
    'terminal.ansiBrightWhite': bright.white,
    'terminal.ansiBrightYellow': '#ffa600',
    'terminal.ansiCyan': scopes.primitive,
    'terminal.ansiGreen': scopes.string,
    'terminal.ansiMagenta': '#C678DD',
    'terminal.ansiRed': normal.red,
    'terminal.ansiWhite': normal.white,
    'terminal.ansiYellow': normal.yellow,
    'terminal.foreground': scopes.text,
    'titleBar.activeBackground': ui.foreBackground,
    'titleBar.activeForeground': bright.white,
    'titleBar.inactiveBackground': ui.foreBackground,
    'titleBar.inactiveForeground': normal.white,
    'widget.shadow': ui.backBackground,
  },
  tokenColors: [
    {
      name: 'Punctuation',
      scope: ['meta.brace', 'punctuation'],
      settings: {
        foreground: scopes.punctuation,
      },
    },
    {
      name: 'Variable',
      scope: ['support.type', 'support.variable', 'variable'],
      settings: {
        foreground: scopes.variable,
      },
    },
    {
      name: 'Storage',
      scope: ['storage', 'support.class'],
      settings: {
        foreground: scopes.storage,
      },
    },
    {
      name: 'Primitive',
      scope: ['constant', 'keyword.other'],
      settings: {
        foreground: scopes.primitive,
      },
    },
    {
      name: 'Comment',
      scope: [
        'comment',
        'punctuation.definition.comment', // start and end of comment blocks
      ],
      settings: {
        foreground: scopes.comment,
      },
    },
    {
      name: 'String',
      scope: ['string', 'markup.inline'],
      settings: {
        foreground: scopes.string,
      },
    },
    {
      name: 'Function',
      scope: [
        'entity',
        'support.function',
        'punctuation.definition.entity', // css . and # for classes and IDs
      ],
      settings: {
        foreground: scopes.function,
      },
    },
    {
      name: 'Tag',
      scope: [
        'entity.name.tag',
        'variable.language', // this
      ],
      settings: {
        foreground: scopes.tag,
      },
    },
    {
      name: 'Keyword',
      scope: [
        'entity.name.section', // markdown headings' text
        'keyword',
        'punctuation.definition.heading', // markdown headings' hashes
        'punctuation.definition.keyword', // css @ in @media queries
      ],
      settings: {
        foreground: scopes.keyword,
      },
    },
    {
      name: 'Bold',
      scope: [
        'markup.bold',
        'punctuation.definition.bold',
        'entity.other.attribute-name.id', // css ID
      ],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Italic',
      scope: ['comment', 'markup.italic', 'punctuation.definition.italic'],
      settings: {
        fontStyle: 'italic',
      },
    },
  ],
}

const json = JSON.stringify(template, null, 2)

fs.writeFile('themes/plastic-theme.json', json, 'utf8', () =>
  console.log('done')
)
